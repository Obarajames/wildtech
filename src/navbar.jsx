import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";



function navbar (){
    const [toggleMenu , setToggleMenu] = React.useState(false)
    return(
        <>
       <div className="gpt3__navbar">
        <div className="gpt3__navbar_link">
            <div className="gpt3__navbar_link_logo">
            <h3>Tech Pulse</h3>
            </div>
            <div className="gpt3__navbar__links_container">
                <p><a href="#home">Home</a></p>
                <p><a href="#home">Videos</a></p>
                <p><a href="#home">Photos</a></p>
                <p><a href="#">About us</a></p>

                
            </div>
        </div>
        <div className="gpt3__navbar_sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
        </div>

        {/* mobile menu */}
        
        <div className="gpt3__navbar_menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
         <div className="gpt3__navbar-menu_container scale-up-center">

              <div className="gpt3__navbar__links_container-links">
               <p><a href="#home">Home</a></p>
               <p><a href="#home">What is GPT3</a></p>
               <p><a href="#home">Open AI</a></p>
               <p><a href="#">Case Studies</a></p>
               <p><a href="#blog">Library</a></p>
              </div>

              <div className="gpt3__navbar-menu_continer-links-sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
              </div>

         </div>
          )}
        </div>
       </div>
        </>
    )
}
export default navbar