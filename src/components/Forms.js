import React, { useState } from 'react'

function Forms() {

    const [name,setName]=useState("");

    const submit=(event)=>{
        event.preventDefault();
        alert(`${name}`);
    }
  return (
    <div>
        <form onSubmit={submit}>
            <label>Enter Name: </label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Forms