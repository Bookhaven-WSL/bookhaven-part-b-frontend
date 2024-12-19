import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';

export default function Navbar(props){

    let activeNavStyle = {
        textDecorationColor: "green",
        textDecorationLine: "underline"
    }

    return(
        <nav>
            <NavLink to="/read" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                Read
            </NavLink>
            <br></br>
            <NavLink to="/tbr" end style={({isActive}) => isActive ? activeNavStyle : undefined}>
                To Be Read
            </NavLink>
            <br></br>
            <NavLink to="/search" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                Search
            </NavLink>
            <br></br>
            <NavLink to="/recommendations" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                Recommendations
            </NavLink>
        </nav>
    )
}