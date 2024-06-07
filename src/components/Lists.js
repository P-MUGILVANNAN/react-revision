import React from 'react'

function Lists() {

    const fruits=["apple","banana","orange"];
    const listitems=fruits.map((fruit)=>
        <li>{fruit}</li>
    )
  return (
    <div>
        <ul>
            {listitems}
        </ul>
    </div>
  )
}

export default Lists