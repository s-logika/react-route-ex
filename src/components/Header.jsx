import { Link } from "react-router-dom";

function Header() {
    return(
        <>
        <h1>header components</h1>
        <ul>
            <li>
                <link to="/">Home</link>
            </li>
            <li>
               <link to="/about">About</link>
            </li>
            <li>
               <link to="/contact">Contact</link>
            </li>
        </ul>
        </>
    );
}
export default Header