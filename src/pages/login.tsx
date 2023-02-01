import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();
    const signIn = async () =>  {
        const result = await signInWithPopup(auth, provider)
        console.log(result)
        navigate("/")
    }

    return (
        <div>
            <h1 className="title">Login page</h1>
            <button className="button" onClick={signIn}>Sign in with google</button>
        </div>
    )
}