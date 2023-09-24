import React, { useState } from "react";
import { useEffect } from "react";

const Form = () => {
  const data = { name: "", email: "", password: "" };
  const[flag, setFlag] = useState(false)

  useEffect(()=>{
    
  },[flag])
  
  const [inputData, setInputData] = useState(data);
  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData)
  };
  const handleSubmit = () => {
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("all fields are mandatory");
    }
    else{
      setFlag(true)
    }
  };
  return (
    <>
      <h1>registration form</h1>
      <pre>{(flag)? <h2>hello {inputData.name}, you have regestered successfully</h2>: ""}</pre>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            value={inputData.name}
            onChange={handleData}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            value={inputData.email}
            onChange={handleData}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="enter your password"
            name="password"
            value={inputData.password}
            onChange={handleData}
          ></input>
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Form;
