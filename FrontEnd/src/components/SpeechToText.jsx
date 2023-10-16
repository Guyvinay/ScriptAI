import React, { useState } from 'react';
// import './style.css'; // Assuming you have the CSS file in the same folder as this component
import { IonIcon } from '@ionic/react'; // Assuming you've installed Ionicons package
import { styled } from 'styled-components';

const SpeechToText = () => {
  const [recording, setRecording] = useState(false);
  const [resultText, setResultText] = useState('');
  const [interimText, setInterimText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [downloadDisabled, setDownloadDisabled] = useState(true);

  const languages = [
    // Replace this array with the actual language options from your "languages.js" file
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    // Add more language options if needed
  ];

  const populateLanguages = () => {
    return languages.map((lang) => (
      <option key={lang.code} value={lang.code}>
        {lang.name}
      </option>
    ));
  };

  const speechToText = () => {
    try {
      const recognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new recognition();
      recognitionInstance.lang = selectedLanguage;
      recognitionInstance.interimResults = true;
      setRecording(true);

      recognitionInstance.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        if (event.results[0].isFinal) {
          setResultText((prevText) => prevText + ' ' + speechResult);
          setInterimText('');
        } else {
          setInterimText(' ' + speechResult);
        }
        setDownloadDisabled(false);
      };

      recognitionInstance.onspeechend = () => {
        speechToText();
      };

      recognitionInstance.onerror = (event) => {
        stopRecording();
        if (event.error === 'no-speech') {
          alert('No speech was detected. Stopping...');
        } else if (event.error === 'audio-capture') {
          alert('No microphone was found. Ensure that a microphone is installed.');
        } else if (event.error === 'not-allowed') {
          alert('Permission to use the microphone is blocked.');
        } else if (event.error === 'aborted') {
          alert('Listening Stopped.');
        } else {
          alert('Error occurred in recognition: ' + event.error);
        }
      };

      recognitionInstance.start();
    } catch (error) {
      setRecording(false);
      console.log(error);
    }
  };

  const stopRecording = () => {
    // Add necessary code to stop the speech recognition instance here
    setRecording(false);
  };

  const download = () => {
    const textToDownload = resultText + interimText;
    const filename = 'speech.txt';
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textToDownload));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div style={{ backgroundColor: "#b7b7ff", height: "100vh",paddingTop:"30px"}}>

    <Div className="container">
      {/* <p className="heading">Speech to Text</p> */}
      <div className="options">
        <div className="language">
          <p>Select Language</p>
          <select
            name="input-language"
            id="language"
            onChange={(e) => setSelectedLanguage(e.target.value)}
            value={selectedLanguage}
          >
            {populateLanguages()}
          </select>
        </div>
      </div>
      <div className="line"></div>
      <button className={`btn record ${recording ? 'recording ' : ''}`} onClick={() => (!recording ? speechToText() : stopRecording())}>
        <div className="icon">
          <IonIcon name="mic-outline" />
          <img src="bars.svg" alt="" />
        </div>
        <p className='Recordbtn'>{recording ? 'Listening...' : 'Start Listening '}
        
        
        {recording ?<i class="fa-solid fa-microphone-slash"></i>:<i class="fa-solid fa-microphone"></i>}

        </p>
      </button>
      {/* <p className="heading">Result :</p> */}
      <div className="result" spellCheck={false} placeholder="Text will be shown here">
        {interimText && <p className="interim">{interimText}</p>}
        <p>{resultText}</p>
      </div>
      <div className="buttons">
        <button className="btn clear" onClick={() => setResultText('')}>
          <IonIcon name="trash-outline" />
          <p className='clearbtn'>Clear <i class="fa-solid fa-trash-can"></i></p>
        </button>
        {/* <button className="btn download" onClick={download} disabled={downloadDisabled}>
          <IonIcon name="cloud-download-outline" />
          <p>Download</p>
        </button> */}
      </div>
    </Div>
  
    </div>
  );
};

export default SpeechToText;
const Div=styled.div`
  margin:auto;
  width: 40%;
  border: 5px solid #b7b7ff;
  border-radius: 15px;
  padding-top: 50px;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .language{
border: 2px solid #d54ba0f6;
background-color: #d54ba0f6;
display: flex;
flex-direction: row;
padding: 10px 20px 10px;
font-size: 20px;
    font-weight: 700;
    color: white;
    font-size: 20px;
    border-radius: 5px;
  }
  .Recordbtn{
    border: 2px solid #5757ff;
    padding: 10px 20px 10px;
    font-size: 20px;
    font-weight: 700;
    color: white;
    background-color: #5757ff;
    border-radius: 5px;
  }
  select{
    margin: 0px 30px;
    border-radius: 5px;
  
    padding:5px 25px 5px;
    color: black;
  }
  .result{
    margin-top: 20px;
    border: 2px solid #8e8eff;
    background-color: #8e8eff;
    color: #ffffff;
    padding: 10px;
    width: 90%;
    height: 200px;
  border-radius: 5px;
  }
  .clearbtn{
    background-color: #ff185d;
    color: white;
    font-weight: 700;
    padding: 10px 20px 10px;
    border-radius: 5px;
    margin-bottom: 20px
  }

  @media (max-width: 600px) {

    width: 90%;
   
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  }

  .language{
border: 2px solid #d54ba0f6;
background-color: #d54ba0f6;

padding: 10px 10px 10px;
flex-direction: column;
justify-content: center;
align-items: center;
    font-weight: 700;
    color: white;
    font-size: 15px;
    border-radius: 5px;
  }
`
