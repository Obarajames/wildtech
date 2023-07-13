/*We imported react in order to use it in this file */
import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
/*Here we are importing createUserWithEmailAndPassword function from firebase used to create new collection of 
a user by their email address and password. */
import { createUserWithEmailAndPassword } from "firebase/auth";
/*we are importing a variable from our db which  takes a Firebase app instance as a parameter */
import { auth } from "./logindb"
import Homepage from "./homepage";
/*This is start of our component that is exported to app.jsx  */
function signup() {
    /*inside our component we created 2 states whose value is initially asign to an empty string */
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    /*Here we are creating a function passing an event to it as the parameter and it is assign to a variable
    called logup */
    const signup = (e) => {
        /* prevent the default behavior of an event that is like reloadof page when u submit a form  */
        e.preventDefault()
        /*create a new user account with the provided email address and password. */
        createUserWithEmailAndPassword(auth, email, password)
            /*then method is called on the promise returned by signInWithEmailAndPassword */
            .then((useCredetials) => { })

    }
    return (
        <>

            <form onSubmit={signup} className="form card">
                <h1 className="form_heading">Create An Account</h1>
                <div className="field">
                    <input type="email" placeholder="Enter your email."
                        /*the value is assigned to the empty string in our state */
                        value={email}
                        /*This enables us to type on the input  */
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <input type="password" placeholder="Enter your Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="field">
                    <button type="submit"> <span>sign up</span></button>

                </div>
                <Link to="/signIn">Or sign up</Link>
            </form>
        </>
    )
}
/*enable the export of our child component to our parent component */
export default signup