import React from "react";
import './index.css';
import { GiCancel } from 'react-icons/gi';

const Todo =(props)=>{
    const deleteitems=()=>{
     props.deleteitem(props.id)
    }
    return(
        <>
        
    <div className="icon">
    <li>{props.text} </li> 
       
       <GiCancel  className="icons" onClick={deleteitems}/>
    </div>
      
        
       
       
       
    </>
    )
      
}
export default Todo;