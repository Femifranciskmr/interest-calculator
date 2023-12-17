
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [amount,setAmount]=useState(0); //1000
  const [year,setYear]=useState(0); //5
  const [rate,setRate]=useState(0); //3

 const calculate=(e)=>{
  const output=amount*year*rate/100;
  setInterest(output);
  }
  const reset=(e)=>{
    setAmount(0);
    setRate(0);
    setYear(0);
    setInterest(0);
  }
  
  const [interest,setInterest]=useState(0);  //result interest
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>simple interest calculator</h1>
          <p>calculate your simple interests with us ❤️</p>
        </div>
        
        <div className="total">
          <h3>&#x20B9;{interest}</h3>
          <p>your total interest</p>
        </div>

        <div className="form">
          <form action="">
              <div className="input">
                <TextField id="outlined-basic" value={amount||""} onChange={(e)=>setAmount(e.target.value)} label="amount" variant="standard" /><br />

                <TextField id="filled-basic" value={year||""} onChange={(e)=>setYear(e.target.value)} label="year" variant="standard" /><br />

                <TextField id="standard-basic" value={rate||""} onChange={(e)=>setRate(e.target.value)} label="rate" variant="standard" /><br />
              </div>
              <div className="button">
              <Button variant="contained" onClick={e=>calculate(e)}>calculate</Button>
              <Button variant="outlined" onClick={e=>reset(e)}>reset</Button>
              </div>
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
