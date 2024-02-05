import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/counter/userSlice'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [URL, setURL] = useState("")
    const dispatch = useDispatch()

    const register = () => {
        if (!name) {
            return alert('please enter a full name')
        }

        // dispatch login info
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: URL,
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: URL
                }))
            })
        }).catch(error => alert(error))
    }

    const loginToApp = (e) => {
        e.preventDefault();


        auth.signInWithEmailAndPassword(email, password).then(
            userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                }))
            }
        ).catch(error => alert(error))
    }

    return (
        <div className='login'>
            <img src="./LI-Logo.png" alt="" />


            <form>
                <input placeholder="Full name" type="text" value={name} onChange={e => setName(e.target.value)} />

                <input placeholder="Profile picture URL(optional)" type="text" value={URL} onChange={e => setURL(e.target.value)} />
                <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?{"    "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>

        </div>
    )
}

export default Login