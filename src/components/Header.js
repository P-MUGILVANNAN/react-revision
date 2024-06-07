import { useState } from "react";
import { Link } from "react-router-dom";

export function Header(){
    const [name,setName]=useState("Mugesh");

    return(
        <div>

            <h1>{name}</h1>
            <nav>
                <ul>
                    <Link to="/home"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    
                </ul>
            </nav>
            <button 
        onClick={() => setName("Mugil")}
      >Click</button>
        </div>
    );
}