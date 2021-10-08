import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './css/Index.css'
import db, { auth, provider } from '../firebase';
import { getDoc, doc, setDoc } from "firebase/firestore";
import { signInWithPopup } from "@firebase/auth";

const Index = () => {
    const history = useHistory()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    useEffect(() => {
        if (user) {
            history.push('/games')
        } 
    }, [user])
    const googleSignin = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const newGoogleUser = {
                name: result.user.displayName,
                email: result.user.email,
                image: result.user.photoURL,
                id: result.user.uid,
                balance: 0
            }
            // const q = query(collection(db, "users", newGoogleUser.id), where('email', '==', newGoogleUser.email))
            // getDocs(q)
            getDoc(doc(db, "users", newGoogleUser.id)).then(user => {
                    if (!user.data()) {
                        setDoc(doc(db, "users", newGoogleUser.id), newGoogleUser)
                        localStorage.setItem('user', JSON.stringify(newGoogleUser))
                        setUser(localStorage.getItem('user'))
                    }
                    else {
                        localStorage.setItem('user', JSON.stringify(newGoogleUser))
                        setUser(localStorage.getItem('user'))
                    }
                }
            )
        })
        .catch(error => console.log(error.message))
    }
    return (
        <div className="index">
            <div className="board">
                <h1 className="title">CasinoX</h1>
                <p className="action">
                    <Link to="#" onClick={() => googleSignin()}>GET STARTED</Link>
                    <i>OR</i>
                    <Link to="#" onClick={() => {
                        localStorage.setItem('opponent', 'computer')
                        history.push('games')
                    }}>TRY FOR FREE</Link>
                </p>
            </div>
        </div>
    )
}

export default Index