import React from 'react'
import logo from "../images/ScriptAIlogo.png";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineComputer } from "react-icons/md"
import {GrScorecard} from "react-icons/gr"
import {Link} from "react-router-dom"
export const Navbar = () => {
    return (
        <div style={{ height: "100px", boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2px 40px",position:"fixed",top:"0",width:"100%",backgroundColor:"white",zIndex:"1000"}}>
            <div>
                <a href={"/"}><img src={logo} alt="" style={{ width: "30%" }} /></a>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <AiFillHome style={{ fontSize: "25px" }}/>
                    <Link to='/' style={{ fontSize: "20px", fontWeight: "600" }}> Home</Link>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <MdOutlineComputer style={{ marginTop: "5px", fontSize: "30px" }} />
                    <a href={"#inter"} style={{ fontSize: "20px", fontWeight: "600" }}> Interviews</a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <GrScorecard style={{ marginTop: "5px", fontSize: "30px" }} />
                   <Link to={"/score"}><p style={{ fontSize: "20px", fontWeight: "600" }}>Scores</p></Link> 
                </div>
            </div>

        </div>
    )
}
