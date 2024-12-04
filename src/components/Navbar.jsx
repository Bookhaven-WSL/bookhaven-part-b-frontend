import { NavLink } from "react-router-dom";

export function Navbar(props){
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        Read
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tbr" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        To Be Read
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/search" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        Search
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/recommendations" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        Recommendations
                    </NavLink>
                </li>
                <form>
                    <input />
                </form>
            </ul>
        </nav>
    )
}