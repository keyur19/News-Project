import React from "react";
import footerImage from "./fooimg.jfif"
function Footer(){
    const footerStyle={
        color:"white",
        backgroundColor:"black",
        fontSize:"22px",
        padding:"20px"
    }
    const iconAlign = {
        marginRight:"10px",
        color: "#FFD43B",
        verticalAlign: "middle",
    }
    let date = new Date();
    let datenum = date.getDate();
    let month = date.getMonth() + 1;
    return(
        <>
        <div style={footerStyle} className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-6">
        <h4 className="container"><i class="fa-solid fa-user-tie"style={iconAlign}></i> Developed By Keyur Rachchh</h4>
        <br />
        <span><i className="fa-solid fa-phone" style={iconAlign}></i>  91739 00013</span>
        <br />
        
        <span><i className="fa-brands fa-square-instagram" style={iconAlign}></i> Keyur_rachchh</span>
        <br />
        <span><i className="fa-solid fa-envelope" style={iconAlign}></i> keyurrachchh8@gmail.com</span>
        <br /><br />
        <span><i className="fa-solid fa-pen" style={iconAlign}></i> Last Updated On {datenum} / {month}</span>
        </div> <br /><br />
        <div className="col-sm-6">
           <img src={footerImage} alt="news" /> 
        </div>
        </div>
        </>
    )
}
export default Footer;