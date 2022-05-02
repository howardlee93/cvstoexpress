// import './App.css';
import React, {useState} from 'react';
import Table from './Table';
import axios from 'axios';


function App() {

  const [inputText, setInputText] = useState("");

  const [data, setData] = useState([]);

  const inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);

  };

  const handleSubmission = (e)=>{
    if (e.keyCode === 13){
      axios.get(`/api/${inputText}`)
      .then(res => setData(res.data.data) );
    }
   
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CSV search test</h1>
      </header>
      <input type="text" onChange={inputHandler} onKeyDown={e =>handleSubmission(e)}/>
      <h3>{inputText}</h3>
      {data ? (<Table data={data}/>) : ("")}
      {/* <Table data={data}/> */}
    </div>

    
  );
}

export default App;
