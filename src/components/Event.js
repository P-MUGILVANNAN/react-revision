import React from 'react'

const handleSubmit=(e)=>{
    e.preventDefault();
    alert("I am Batman");
}

function Event() {
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Event