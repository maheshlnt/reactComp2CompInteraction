import React, { useState } from "react";

const Forms=(props)=>{
    const [inp, setInp]=useState("");
    const onIp=(event)=>{
     event.preventDefault();
     setInp(event.target.value);
     console.log(event.target.value)
}
const onSub=(event)=>{
    event.preventDefault();
    let obj={"name":inp, "id":Math.round(Math.random().toString()*1000)}
    props.appendInput(obj);
    console.log(obj);
}
    return <form onSubmit={onSub}>
           <input type="text" name="name" onChange={onIp}/>
           <input type="submit" name="submit"  value="submt"/>
           </form>
}
export default Forms;