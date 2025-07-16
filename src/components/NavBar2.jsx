import React from "react";
import { Link } from "react-router-dom";


const myIconStyle={
    color:"coral",
    fontSize:"22px",
}
function NavBar2(){
    return(
        <div className="sticky-top">
             
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid">
                <button className="forcolor navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">  <span className="navbar-toggler-icon"></span> </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* here we give value to "to" that is main that we use in path */}
                            <Link className="nav-link active" aria-current="page" to="/"><i className="fa-solid fa-house" style={myIconStyle}></i> Home</Link>
                        </li>
                        {/* this navbar the white text is showing on screen and this "to" is main this is we use in path means path is active when we click and path have one attribute "element" when we click this then this "to" is goes to path and when this "to" and there "path" is match then that element is call (exhecuted) */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Entertainment"><i className="fa-solid fa-user-secret"style={myIconStyle}></i> Entertainment</Link>
                        </li>
                         {/* this navbar the white text is showing on screen and this "to" is main this is we use in path means path is active when we click and path have one attribute "element" when we click this then this "to" is goes to path and when this "to" and there "path" is match then that element is call (exhecuted) */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Technology"><i className="fa-solid fa-robot"style={myIconStyle}></i> Technology</Link>
                        </li>
                         {/* this navbar the white text is showing on screen and this "to" is main this is we use in path means path is active when we click and path have one attribute "element" when we click this then this "to" is goes to path and when this "to" and there "path" is match then that element is call (exhecuted) */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Sports"><i className="fa-solid fa-chess-king"style={myIconStyle}></i> Sports</Link>
                        </li>
                         {/* this navbar the white text is showing on screen and this "to" is main this is we use in path means path is active when we click and path have one attribute "element" when we click this then this "to" is goes to path and when this "to" and there "path" is match then that element is call (exhecuted) */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Business"><i className="fa-solid fa-business-time"style={myIconStyle}></i> Business</Link>
                        </li>
                         {/* this navbar the white text is showing on screen and this "to" is main this is we use in path means path is active when we click and path have one attribute "element" when we click this then this "to" is goes to path and when this "to" and there "path" is match then that element is call (exhecuted) */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Health"><i className="fa-solid fa-user-doctor" style={myIconStyle}></i> Health</Link>
                        </li>
                         {/* this navbar the white text is showing on screen and this "to" is main this is we use in path means path is active when we click and path have one attribute "element" when we click this then this "to" is goes to path and when this "to" and there "path" is match then that element is call (exhecuted) */}
                        <li className="nav-item"> 
                            <Link className="nav-link" to="/Science"><i className="fa-solid fa-lightbulb" style={myIconStyle}></i> Science</Link>
                            {/*<i class="fa-solid fa-lightbulb"></i>  */}
                        </li> 
                    </ul>
                </div>
                </div>
            </nav>
        </div>
        
    )
}

export default NavBar2;