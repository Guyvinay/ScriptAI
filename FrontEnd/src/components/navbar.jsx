import React, { useEffect, useState } from 'react'
import logo from "../images/ScriptAIlogo.png";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineComputer } from "react-icons/md"
import { GrScorecard } from "react-icons/gr"
import { Link } from "react-router-dom"
import { Spinner } from '@chakra-ui/react';
import axios from "axios" 
export const Navbar = () => {
    const [load,Setload]=useState(false)
    const loadStatus=()=>{
        console.log("luv")
        Setload(prev=>!prev)
    }

    useEffect(()=>{
        setTimeout(()=>{
            Setload(false)
        },15000)
    },[load])


    return (
        load? <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>
            <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
        <p style={{fontSize:"20px"}}>Loading...</p>
        </div>
        
        : <div style={{ height: "100px", boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2px 40px", position: "fixed", top: "0", width: "100%", backgroundColor: "white", zIndex: "1000" }}>
           
            <div>
                <a onClick={loadStatus} href={"/"}><img src={logo} alt="" style={{ width: "30%" }} /></a>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <AiFillHome style={{ fontSize: "25px" }} />
                    <a onClick={loadStatus}  href='/' style={{ fontSize: "20px", fontWeight: "600" }}> Home</a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <MdOutlineComputer style={{ marginTop: "5px", fontSize: "30px" }} />
                    <a href={"#inter"} style={{ fontSize: "20px", fontWeight: "600" }}> Interviews</a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <GrScorecard style={{ marginTop: "5px", fontSize: "30px" }} />
                    <a onClick={loadStatus}   href={"/score"} ><p style={{ fontSize: "20px", fontWeight: "600" }}>Scores</p></a>
                </div>
            </div>

        </div>
    )
}
