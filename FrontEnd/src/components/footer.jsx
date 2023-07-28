import React from 'react'
import logo from "../images/ScriptAIlogo.png";
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { AiOutlineMail } from "react-icons/ai"
export const Footer = () => {
    return (
        <div style={{ boxShadow: "rgba(0, 0, 0, 0.6) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", display: "flex", justifyContent: "space-around", alignItems: "center",marginTop:"20px" }}>
            <img src={logo} alt="" style={{ padding: "20px" }} width={"20%"}/>
            <div style={{color:"rgba(0, 0, 0, 0.325)"}}>Copyright © 2023 Script AI | All rights reserved.</div>
            <div style={{display:"flex",gap:"5px"}}>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <AiOutlineMail color='gray.300' />
                    </InputLeftElement>
                    <Input type='email' placeholder='Enter your Email' />

                </InputGroup>
                <Button bgColor={"rgba(128, 0, 128, 0.714)"} color={"white"} size='md'>
                    Join Us!
                </Button>
            </div>
        </div>
    )
}
