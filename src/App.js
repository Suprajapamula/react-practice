import React, {useState} from 'react'
const App=()=>{
  const[name,setName]=useState("useState Hook")
  return(
    <div>
      <h1>Welcome to {name}</h1>
    </div>
  )
}
export default App