import { useState } from 'react';
import './App.css';
import FormList from './FormList';
import Forms from './forms/Forms';

function App() {
  let data=[{"name":"t1d", "id":1},{"name":"t2", "id":2}];
  const [newdata,setnewdata]=useState(data);
  const addIp= enteredText => {
   setnewdata(res=>{
    const x=[...res];
    x.unshift(enteredText);
    return x;
   })
  }; 
  function onDelete(name) {
  console.log(name)
  setnewdata(prev=>{
        const data= [...prev];
         const y =data.filter(res=>res.id!==name);
          return y;
  });
//   alert(`hello, ${name}`);
  }
  // const [newdata,setnewdata]=useState(data);
  // const addIp= enteredText => {
  //     setnewdata(prev=>{
  //     const data= [...prev];
  //     data.unshift( enteredText)
  //     return data;
  //   })
  // };
  return (
    <div className="App">
 <Forms  appendInput={addIp}/>   
 {newdata.map(res=><div key={res.id} onClick={() => onDelete(res.id)}>{res.name}</div>)}
  <FormList data={data}></FormList>
   </div>
  );
}
export default App;