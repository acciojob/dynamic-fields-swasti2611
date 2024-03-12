
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput]=useState([{name:" ",age:" "}])
  const handleAddField=()=>{
    
    setInput([...input,{name:" ",age:" "}])
  }

  const handleChange =(e,index)=>{
let newinput=[...input];
newinput[index][e.target.name]=e.target.value;
setInput(newinput)
  }
  const handleClickRemove=(index)=>{
               const newinput=input.filter((item,i)=>i!=index)
               setInput(newinput)
  }
  const handleSubmit=()=>{
    
    console.log(input)
  }
  return (
    <div>
    
       {input.map((item, index) => (
        <div className="box" key={index}>
          <input type="text" value={input.name} name="name" onChange={(e)=>handleChange(e,index)} placeholder="Name"/>
          <input type="text" value={input.name} name="age" onChange={(e)=>handleChange(e,index)} placeholder="Age"/>
          <button onClick={()=>handleClickRemove(index)}>Remove</button>
        </div>
      ))}
      <div className="btn_boxs">
        <button onClick={handleAddField}>Add More..</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default App
