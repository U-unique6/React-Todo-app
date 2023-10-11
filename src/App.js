
import React, { useState } from "react";
import Todo from "./Todo";
import './index.css';

function App() {
  const[name , setname]=useState('');
  const[fullname , setfullname]=useState([]);

  InputEvent=(event)=>{
    setname(event.target.value)
  }
  const onsubmit=()=>{
    setfullname((val)=>{
      return[
        ...val , name
    ];
    });
    setname("");
  }

  const Cancelitem=(id)=>{
 setfullname((oldarr)=>{
  return oldarr.filter((curele , index)=>{
    return index!== id
  })
 })
  }
return(
  <>
    <div className="box">
      <h1>Todo List</h1>
      <div className="form-section">
        <input type="text" placeholder="Enter your list" onChange={InputEvent} value={name} />
        <button onClick={onsubmit}>+</button>
      </div>
      <div className="list">
      <ol>
         {fullname.map((list ,index) =>{
          
        return <Todo 
        text={list}
        key={index}
        id={index}
        deleteitem={Cancelitem}

        />
       
          
         })}
        </ol>
      </div>
    </div>
  </>
)
}

export default App;
