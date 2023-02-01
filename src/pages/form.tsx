import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import {addDoc,collection,deleteDoc,doc} from 'firebase/firestore'
import { auth, db } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

interface CreateFormData {
    title: string;
    description : string;   
}

export const Createform = () => {

    
    const [user] = useAuthState(auth)
    const schema = yup.object().shape({
        title: yup.string().required("Title invalid / Empty"),
        description: yup.string().required("Description invalid / Empty")
    })

    const {register,handleSubmit,formState:{errors}} = useForm<CreateFormData   >({
        resolver : yupResolver(schema),
    })

    const postRef = collection(db,"posts");

    const onCreatePost = async (data:CreateFormData) => {
        await addDoc(postRef,  {
            ...data,    
            username: user?.displayName,
            id : user?.uid,

        })
    } 

     const deletePost = async () => {
        try {
            await deleteDoc(doc(db, "posts", "post-id"));
        } catch (e) {
            console.error("can't del post ", e);
        }
    }
 
    return (    
        <div>
            <form onSubmit={handleSubmit(onCreatePost)}>
            <input className='post-title'placeholder='Title' {...register("title")} />
            <p style={{color:"red"}}> {errors.title?.message}</p>
            <input className='post-description'  placeholder='Description' {...register("description")} />
            <p style={{color:"red"}} > {errors.description?.message}</p>
            <input className='post-submit' type='submit' value='Submit' />
            </form>
        </div>
    )   
}

