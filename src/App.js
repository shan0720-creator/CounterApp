import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'




function App() {



 let [count,setFunc] = useState(0)
   
  const Increment = ()=>{
    setFunc(count+1)
  }
  const Decrement = ()=>{
    setFunc(count-1)
  }
    
  const reset = ()=>{
    setFunc(count = 0)
  }

  const CustomIncrement = ()=>{
    setFunc(count+5)
  }



  return (
     <div className = "Counter">
           
           
         <h3 className='count' style={{color:count>=0 ? 'green' : 'red'}}>{count}</h3>

           <button className="btn1" onClick={Increment} style={{background:'green'}}>Increment</button>
           <button className="btn2" onClick={Decrement} style={{background:'red'}}>Decrement</button>
           <button className="btn3" onClick={reset} style={{background:'white'}}>Reset</button>
           <button className="btn4" onClick={CustomIncrement} style={{background:'yellow'}}  >Custom Increment</button>
       
     </div>
  );
}

export default App;
