import React, { useState,useEffect } from 'react';
function App(porps){
  const [count,setCount] = useState({a:1,b:2});
  useEffect(()=>{
    console.log("componen did mount");
    return ()=>{
      console.log("unmount");
    }
  },[count.a])
  return(
    <div>
    <h1>hello a{count.a}</h1>
    <h1>hello b{count.b}</h1>
    
    <button onClick={()=>setCount(c=> {return {...c,a:c.a+1}})}>click a</button>
    <button onClick={()=>setCount(c=> {return {...c,b:c.b+1}})}>click b</button>
    
    </div>)
}
export default App