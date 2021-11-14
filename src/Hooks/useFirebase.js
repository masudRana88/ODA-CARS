import axios from "axios";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    // Email SingIn
    const singInWithEmail = (data,hisotory) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            upToDB(data)
            if (user.email) {
            alert("Sing is Susseccfull !!!")
            hisotory.push('/')
        }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            if (errorCode === "auth/email-already-in-use") {
                alert("This email Already used for Sing Up")
            }
            // ..
         });
    }
    // email Login
    const logInWithEmail = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.pass)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user)
            getToDB(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    // uplode user to DB
    const upToDB = (data) => {
        axios.post("http://localhost:5000/user", data)
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response)
                    setUser(data)
            }
        })
    }
    // get user form DB
    const getToDB = (user) => {
        const userEmail = user.email
        axios.get(`http://localhost:5000/user/${userEmail}`)
            .then(function (response) {
                if (response.status === 200) {
                setUser(response.data)
            }
        })
     }
    // logOut 
    const logOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
        }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                getToDB(user)
            }
            else {
                setUser({})
            }
        })
        return () => unsubscribe;
    },[])

    return {user,logInWithEmail,singInWithEmail,logOut}
}
export default useFirebase;