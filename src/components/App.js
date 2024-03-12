
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput]=useState([{name:" ",age:" "}])
  const handleClickAdd=(e)=>{
     e.preventDefault()
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
  const handleclickSubmit=(e)=>{
    e.preventDefault()
    console.log(input)
  }
  return (
    <div>
    <form>
       {input.map((item, index) => (
        <div>
          <input type="text" value={input.name} name="name" onChange={(e)=>handleChange(e,index)} placeholder="Name"/>
          <input type="text" value={input.name} name="age" onChange={(e)=>handleChange(e,index)} placeholder="Age"/>
          <button onClick={()=>handleClickRemove(index)}>remove</button>
        </div>
      ))}
      <button onClick={(e)=>handleClickAdd(e)}>Add More</button>
      <button type="submit" onClick={(e)=>handleclickSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default App
