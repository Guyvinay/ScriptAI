import React, { useEffect, useState } from 'react'
import logo from "../images/ScriptAIlogo.png"
import { Spinner, Textarea, Text, Button, Alert, AlertIcon } from '@chakra-ui/react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AiFillCloseCircle } from "react-icons/ai"
export const StartInterview = () => {
    const [load, Setload] = useState(true)
    const [sec, Setsec] = useState(10)
    const [alert, setAlert] = useState(false)
    const navigate = useNavigate()
    // let sec=10
    const closeInterview = () => {
        setAlert(true)

            aletfun()
        
    }
    const aletfun=()=>{
        setTimeout(()=>{
            navigate("/")
        },4000)
        
    }
    const setState = () => {

        setInterval(() => {
            Setsec(prev => prev - 1)
            // sec=sec-1
        }, 1000)
    }
    if (sec == 10) {
        setState()
    }
    useEffect(() => {

        if (sec == 0) {
            Setload(false)
        }
    }, [sec, load, alert])
    return (
        <div>
            {load ? <div style={{ backgroundColor: "rgba(0, 0, 0, 0.364)", height: "100vh", display: "grid", justifyContent: "center", alignItems: "center" }}>
                {/* <img src={logo} alt="" /> */}
                <div style={{ backgroundColor: "white", border: "1px solid white", borderRadius: "15px", padding: "20px", textAlign: "center" }}>
                    <h1 style={{ textAlign: "center", fontSize: "35px" }}>All the Best !!</h1>
                    <br />
                    <h1 style={{ textAlign: "center", fontSize: "35px" }}>Interview Started On</h1>
                    <br />
                    <div style={{ display: "flex", gap: "15px", justifyContent: "center", alignItems: "center" }}>
                        <h1 style={{ textAlign: "center", fontSize: "35px" }}>0:{sec == 10 ? "" : 0}{sec}</h1>
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />
                    </div>
                </div>
            </div> :


               

                < div id='start-interview'>
                   
                    
            {/* <h1 style={{ textAlign: "center", fontSize: "35px" }}>Interview Started</h1> */}
            <div>

                <Link to={"/"}><img src={logo} alt="" width={"15%"} style={{ margin: "auto", mixBlendMode: "color-burn" }} /></Link>
            </div>
            {
                         alert ? <Alert status='success' width={"30%"} textAlign={"center"} margin={"auto"} mb={5}>
                         < AlertIcon />
                         Thankuu for Atempting Interview !!
                     </Alert> : ""
                    }
            <div>
                <div style={{ marginTop: "50px" }}>
                    <h1 style={{ fontSize: "25px", fontWeight: "600" }}>Q1. What is React.js? Explain some Hooks.</h1>

                </div>
                <div>
                    <Text ml={1} mt={30} mb='8px'>Answer: </Text>
                    <Textarea
                        // onChange={handleInputChange}
                        bgColor={"white"}
                        height={"50vh"}
                        placeholder='Your Answer is converted into text here !!'
                        size='sm'
                    />
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}>
                        <Button colorScheme='blue' mt={5}>Submit</Button>
                        <Button colorScheme='red' onClick={closeInterview} mt={5}>Close Interview</Button>
                    </div>
                </div>
            </div>
        </div>}
        </div >
    )
}
