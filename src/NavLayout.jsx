import { Outlet, Link, NavLink } from "react-router"
export default function NavLayout(){
    return (
        <>
            <nav>
                <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/app">App</NavLink>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li> 
                <li>
                    <Link to="/courses">courses</Link>
                </li>
                <li>
                    <Link to="/Users">Users</Link>
                </li>
                <li>
                    <Link to="/Users/list">List</Link>
                </li>
                <li>
                    <Link to="/adsfjkl">Not Available page</Link>
                </li>            
                </ul>
            </nav>
            <hr/>
            <hr/>
        <Outlet />
        </>
    )
}
