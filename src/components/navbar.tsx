import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

export const Navbar = () => {
const [user, loading, error] = useAuthState(auth)
const signUserOut = async () => {
await signOut(auth)
}
return (
<header className='header'>
<div className='header__links'>
<Link className='header__link header__link--underlined' to='/'>Home</Link>
{!user ? (
<Link className='header_Home header_Home--underlined' to='/login'>Login</Link>) : (
<Link className='header__link header__link--underlined' to='/createpost'>Create Post</Link>)
}
</div>
{user && (
<div className='header__user'>
<p className='header__name'>{auth.currentUser?.displayName}</p>
<img className='header__photo' src={user?.photoURL || ''} width='50' height='50' />
<button className='header__sign-out' onClick={signUserOut}>Sign Out</button>
</div>
)}
</header>
)
}