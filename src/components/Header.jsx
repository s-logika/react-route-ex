import React from "react"
import { Link } from "react-router-dom";

function Header() {
    return (
      
        <ul>
            <div>
            <li>
                <link to="/">Home</link>
            </li>
            <li>
               <link to="/about">About</link>
            </li>
            <li>
               <link to="/contact">Contact</link>
            </li>
            </div>
        </ul>
       
    )
}
export default Header