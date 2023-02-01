import {getDocs,collection} from 'firebase/firestore'
import {db} from '../config/firebase'
import {useState,useEffect} from 'react'
import { object } from 'yup';
import {Post} from './Post' 

export interface Post {
    title : string;
    description : string;
    username : string;
    id : string;
}


export const Main = () => {

    // can be null cuz we don't know if the data is loaded or not
    // <Post[] | null> is the type of postList 
    const [postList,setPostList] = useState<Post[] | null> (null);
    const postRef = collection (db,"posts")

    // async cuz firestore require await 
    const getPost = async () =>  {
        const data = await getDocs(postRef);
        // cast to Post[] type 
        // for each doc in data.docs, return an object with the data and id of the doc
        // as Post[] cast the array to Post[] type
        setPostList(data.docs.map((doc) => ({...doc.data(), id : doc.id})) as Post[])
    }
    
    useEffect(() => {
        getPost();
    },[]);
    
    return (
        <div>
            {postList?.map((post) => (
                <Post  post={post} />
            ))}
       </div>

    )
}