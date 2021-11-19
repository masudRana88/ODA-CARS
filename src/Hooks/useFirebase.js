import axios from "axios";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoding, setIsLoding] = useState(true)
    const auth = getAuth();
    // Email SingIn
    const singInWithEmail = (data, hisotory) => {
        setIsLoding(true)
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
        })
        .finally(() => setIsLoding(false))
    }
    // email Login
    const logInWithEmail = (data, history, location) => {
        setIsLoding(true)
        signInWithEmailAndPassword(auth, data.email, data.pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                console.log(user)
                getToDB(user)
                alert("Loggedin Suceesful !!")
                history.push("/home")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsLoding(false));
    }
    // uplode user to DB
    const upToDB = (data) => {
        setIsLoding(true)
        axios.post("https://fierce-dawn-14977.herokuapp.com/user", data)
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response)
                    setUser(data)
            }
        }).finally(() => setIsLoding(false));
    }
    // get user form DB
    const getToDB = (user) => {
        const userEmail = user.email
        axios.get(`https://fierce-dawn-14977.herokuapp.com/user/${userEmail}`)
            .then(function (response) {
                if (response.status === 200) {
                    setUser(response.data)      
            }
        }).finally(() => setIsLoding(false));
     }
    // logOut 
    const logOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
            // setIsLoding(false)
        }).catch((error) => {
        // An error happened.
        });
        }
    useEffect(() => {
        setIsLoding(true)
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

    return {user,isLoding,logInWithEmail,singInWithEmail,logOut}
}
export default useFirebase;