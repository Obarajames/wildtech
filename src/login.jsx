/*We imported react in order to use it in this file */
import React from "react";
import { Link } from "react-router-dom";

/*Here we are importing signInWithEmailAndPassword function from firebase used to authenticate a user by their email address and password. */
import { signInWithEmailAndPassword } from "firebase/auth";
/*we are importing a variable from our db which  takes a Firebase app instance as a parameter */
import { auth } from "./logindb"
import AuthDetails from "./authentification";


/*This is start of our component that is exported to app.jsx  */
function signIn() {
    
    /*inside our component we created 2 states whose value is initially asign to an empty string */
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")



    const [username, setUsername] = React.useState("");
    const [user, setUser] = React.useState("");
    console.log(user)


    /*Here we are creating a funstion passing an event to it as the parameter and it is assign to a variable
    called logup */
    const logup = (e) => {
        /* prevent the default behavior of an event that is like reloadof page when u submit a form  */
        e.preventDefault()
        /* initiates the sign-in process by sending the provided email and password to Firebase for authentication */
        signInWithEmailAndPassword(auth, email, password)
            /*then method is called on the promise returned by signInWithEmailAndPassword */
            .then((useCredetials) => { })

    }
    /*Our component retuns this html code in react frugments */
    return (
        <>
            
            <form onSubmit={logup} className="form card">
                <h1 className="form_heading">Log in to your account</h1>


                <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />


                <div class="field">
                    <input type="email" placeholder="Enter your email."
                        /*the value is assigned to the empty string in our state */
                        value={email}
                        /*This enables us to type on the input  */
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="field">
                    <input type="password" placeholder="Enter your Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="field">
                    <button type="submit" onClick={() => setUser(username)} > <span>Log In</span> </button>
                </div>
                <Link to="/signup">Or sign up</Link>
            </form>
        </>
    )
}
/*We are exporting our component function in order to use it /refeer to it in the App.jsx */
export default signIn;
