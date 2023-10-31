import {Link} from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <h3>Navigation</h3>
            <ul>
                <li><Link to={"/"}>Home Page</Link></li>
                <li><Link to={"/characters"}>Character Gallery</Link></li>
                <li><Link to={"/characters/add"}>Add Character</Link></li>
            </ul>
        </nav>
    )
}