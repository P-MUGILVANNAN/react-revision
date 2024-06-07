import React from 'react'
import {details} from "./data"

function Keys() {

    const items=details.map((person=>
        <li key={person.id}>
            <b>{person.name}</b>
            </li>
    ))
  return (
    <div>
        <ul>{items}</ul>
    </div>
  )
}

export default Keys