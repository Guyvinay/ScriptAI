import { Button, Input, Select } from '@chakra-ui/react'
import React from 'react'

export const Interview = () => {
    return (
        <div id='inter'>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ backgroundColor: "rgba(128, 0, 128, 0.714)", height: "40px", width: "70%", marginLeft: "-50px", marginBottom: "18px" }}>

                </div>
                <h1 style={{ fontFamily: "'Noto Serif Vithkuqi', serif", marginTop: "30px", marginBottom: "50px", marginLeft: "20px", fontSize: "30px" }}>Interviews</h1>

            </div>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "10px" }}>
                <div style={{ width: "60%", padding: "50px", backgroundColor: "rgba(0, 0, 0, 0.064)", borderRadius: "20px", marginLeft: "100px", marginTop: "30px" }}>
                    
                    <h1 style={{ textAlign: "center", fontSize: "20px", fontWeight: "600", marginBottom: "50px" }}>Start your Interviews</h1>
                    <p>Enter your Name</p>
                    <Input placeholder='Enter Your Name' bgColor={"white"}/>
                    <br />
                    <br />
                    <p>Select Your Field</p>
                    <Select placeholder='Select Your Field' bgColor={"white"}>
                        <option value='option1'>MERN</option>
                        <option value='option2'>JAVA</option>
                        <option value='option3'>NODE</option>
                    </Select>
                    <br />
                    <p>Select Your Exeprience</p>
                    <Select placeholder='Select Your Exeprience' bgColor={"white"}>
                        <option value='option1'>Fresher</option>
                        <option value='option2'>1 Year</option>
                        <option value='option3'>2 Year</option>
                    </Select>
                    <br />
                    <Button colorScheme='blue' width={"100%"}>Start</Button>
                </div>
                <div>
                    <img src="https://cdn.dribbble.com/users/2704931/screenshots/7048399/media/e9125c8957513a73a246798b8b21350d.png" alt="" />
                </div>
            </div>

        </div>
    )
}
