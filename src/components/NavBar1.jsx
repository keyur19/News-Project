import React from "react";
                    /* one nav element main default section */
const heading = {
    color:"coral",
    fontSize: "30px",
    textDecoration:"none",    
}

function NavBar1(){
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* one nav element main default section */}
                    <a style={heading} href="/"><i className="fa-solid fa-radio fa-xl" style={{color:"#74C0FC"}}></i> What's Up World</a>
                    
                </div>
            </nav>
        </div>
    )
}
export default NavBar1;