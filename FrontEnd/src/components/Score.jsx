import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { styled } from "styled-components";
import { CircularProgress,CircularProgressLabel } from "@chakra-ui/react";

export const Score = () => {
  const obj = {
    name: "Rohit Banerjee",
    track: "MERN",
    interviews: [
      {
        date: "2023-05-15",
        interviewer: "Jane Smith",
        track: "MERN",
        subjects: ["Node.js", "MongoDB", "HTML", "CSS", "JavaScript"],
        performance: 4.7,
        communication: 9.5,
        grooming: 1.8,
        feedback:
          "John showed exceptional problem-solving skills and teamwork. He delivered high-quality code on time.",
      },
      {
        date: "2023-06-02",
        interviewer: "Michael Johnson",
        track: "Java",
        subjects: ["Java", "Spring", "Hibernate", "SQL"],
        performance: 2.5,
        communication: 5.3,
        grooming: 9.7,
        feedback:
          "John's technical knowledge is impressive. He took the initiative to mentor new team members.",
      },
      {
        date: "2023-07-20",
        interviewer: "Emily Adams",
        track: "MERN",
        subjects: [
          "Node.js",
          "Express.js",
          "React",
          "MongoDB",
          "HTML",
          "CSS",
          "JavaScript",
        ],
        performance: 7.8,
        communication: 4.9,
        grooming: 3.6,
        feedback:
          "John demonstrated strong leadership qualities and effectively communicated with stakeholders.",
      },
    ],
  };
  return  (
    <Div>
      <div id="score-container">
        <div className="ScoreHeading">
          <h1>Hi {obj.name} 🙂</h1>
          <h3>Heres the report of your performances.</h3>
        </div>
        <div>
          <div className="CardContainer">
            {obj.interviews.map((el) => {
              const performancePercentage = Math.ceil((el.performance / 10) * 100); 
              const communicationPercentage = Math.ceil((el.communication / 10) * 100); 
              const groomingPercentage = Math.ceil((el.grooming / 10) * 100); 

              const performanceColor =
                el.performance > 6.6
                  ? "#47B881" 
                  : el.performance > 4 && el.performance < 6.5
                  ? "#ff6c3f" 
                  : "#E53E3E"; 

              const communicationColor =
                el.communication > 6.5
                  ? "#47B881" 
                  : el.communication > 4 && el.communication <= 6.5
                  ? "#ff6c3f" 
                  : "#E53E3E"; 

              const groomingColor =
                el.grooming > 6.5
                  ? "#47B881" 
                  : el.grooming > 4 && el.grooming <= 6.5
                  ? "#ff6c3f" 
                  : "#E53E3E";  
              return (
                <div className="Card" key={el.date}>
                  <h2>{el.track}</h2>
                  <div className="cardDetails">
                    <p style={{fontWeight:"700",paddingTop:"10px"}}>Dated on {` ${el.date}`}</p>
                    <div id="techStack" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <h3>Tech Stacks: </h3>
                      <p> {el.subjects.join(" | | ")}</p>
                    </div>



        <div className="chart">
          <h3>Score chart</h3>
          <div  className="CircleDiv">
                      

                      <div className="circle">
                        <CircularProgress size="80px" value={performancePercentage} color={performanceColor}>
                          <CircularProgressLabel>{performancePercentage}%</CircularProgressLabel>
                        </CircularProgress>
                        <h3>Performance</h3>
                      </div>
                      <div className="circle">
                        <CircularProgress size="80px" value={communicationPercentage} color={communicationColor}>
                          <CircularProgressLabel>{communicationPercentage}%</CircularProgressLabel>
                        </CircularProgress>
                        <h3>Communication</h3>
                      </div>
                      <div className="circle">
                        <CircularProgress size="80px" value={groomingPercentage} color={groomingColor}>
                          <CircularProgressLabel>{groomingPercentage}%</CircularProgressLabel>
                        </CircularProgress>
                        <h3>Grooming</h3>
                      </div>
                    </div>


        </div>



                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </Div>
  );

};
const Div = styled.div`
  #socre-container {
    display: flex;
    flex-direction: column;
    /*   
  border: 1px solid red; */
  }
  .ScoreHeading {
    background-color: #5757ff;
    color: white;
    border-radius: 0px 0px 35px 35px;
  width: 100%;
    padding: 10px 50px 10px;
  }
  .ScoreHeading > h1 {
    font-size: 2.5rem;
  }
  .ScoreHeading > h3 {
    font-size: 1.5rem;
  }

.CardContainer{
  width: 90%;
  margin: auto;
display: grid;
padding-top: 30px;
gap: 30px;
grid-template-columns: repeat(2,1fr);
}

.Card{
  border: 2px solid #d54ba0f6;
  border-radius: 15px 15px 15px 15px;
 padding:20px 25px 20px;
  
}
.Card>h2{
  font-size: 1.5rem;
  font-weight: 600;
  padding-left: 20px;
  background-color: #d54ba0f6;
  border-bottom: 1px solid #d54ba0f6;
  border-radius: 5px;
  color: white;
}
.cardDetails{
  font-weight: 600;
}
#techStack{
  padding-top: 20px;
}
#techStack>h3{
  font-weight: 700;
  font-size: 20px;
}p{
  font-weight: 400;
}
.CircleDiv{
  width: 70%;
  margin: auto;
display: flex;

justify-content: space-between;
padding: 30px 30px 30px;
}
.chart{
 background-color: #5757ff;
 color: white;
  display: flex;
  margin: auto;

  align-items: center;
  flex-direction: column;
}
.chart>h3{
  font-size: 1.5rem;
  font-weight: 600;
}
@media (max-width: 600px) {
    /* Add styles for phones here */
    .CardContainer{
      display: flex;
      flex-direction: column;
      
      margin: auto;
    }

    .ScoreHeading {
    /* background-color: #5757ff; */
    color: white;
    border-radius: 0px 0px 35px 35px;
  width: 100%;
  border: 2px solid #5757ff;
    padding: 10px 50px 10px;
  }
  .ScoreHeading > h1 {
    font-size: 1.8rem;
  }
  .ScoreHeading > h3 {
    font-size: 1rem;
  }




  .CircleDiv{
  width: 100%;
  margin: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 10px 10px 10px;
}
.circle{
  display: flex;
  align-items: center;
 margin: 10px;
}



.Card{
  padding:10px 10px 10px;
}




} 
         
`
