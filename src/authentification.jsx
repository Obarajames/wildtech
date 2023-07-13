import { onAuthStateChanged, signOut } from "firebase/auth";
/*we are impoting react and its hooks like useStaea and useEffect */
import React, { useEffect, useState } from "react";
/*we are importing auth from logindb */
import { auth } from "./logindb";
/*we are creating a arrow function */

const AuthDetails = () => {
  /*we are making a state whose value is null */
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    // The useEffect hook is used to perform side effects in functional components
    // It takes a callback function as the first argument
    // This callback function will be executed after the component renders
  
    // The onAuthStateChanged function is likely from a library or framework
    // It listens for changes in the authentication state (e.g., user login/logout)
    // It takes two arguments: the auth object and a callback function
    // The callback function will be called with the user object when the authentication state changes
    const listen = onAuthStateChanged(auth, (user) => {
      // Inside the callback function, we check if the user object is truthy (i.e., not null or undefined)
      if (user) {
        // If a user is present, we update the authUser state variable with the user object
        setAuthUser(user);
        
      } else {
        // If no user is present, we set the authUser state variable to null
        setAuthUser(null);
      }
    });
  
    // The useEffect hook also allows us to specify a cleanup function that runs before the component is unmounted
    // In this case, we are returning a function that invokes the 'listen' function (the event listener cleanup)
    // This ensures that the event listener is removed when the component unmounts
    return () => {
      listen();
    };
  }, []);

  /*userSignOut function is defined to handle the sign-out action */
  const userSignOut = () => {
    // It takes the auth object as an argument and returns a promise
   // It signs out the currently authenticated user
   // If sign-out is successful, the 'then' block is executed
   // If an error occurs, the 'catch' block is executed

    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
         // If an authenticated user exists, render the following JSX
        <>
        <div className="paragraph">
          <p>{`Signed In as ${authUser.email} `}</p>
          </div>
          <div className="field-continue">
            <button type="submit"> <span>Continue</span> </button>
            <button onClick={userSignOut}>Sign Out</button>
            </div>
          
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;