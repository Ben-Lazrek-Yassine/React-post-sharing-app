import {Post as I_post} from './main'
import { db } from '../config/firebase'
import {getDocs,collection} from 'firebase/firestore'

interface Props {
    post : I_post;
}


export const Post = (props : Props) => {
    // Fix this shit 
     
    //const delPost = async (id:string) => {
    //    const reference = db.collection('sodas').doc(id)
    //    await reference.delete()
    //}


    const {post} = props;
    return (
        <div className='post'>
            <div className='post_head'>
                <h1 className='post_title'>{post.title}</h1>
                <button key={post.id} /* fix delPost button thing */ className='x_button'>X</button>
            </div>
            <div className='post_body'>
                <p className='post_description'>{post.description}</p>
            </div>
            <div className='footer'>
                <p className='post_username'>{post.username}</p>
                </div>
        </div>
    );
}