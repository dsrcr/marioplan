import { NavLink } from "react-router-dom";

export default function SignedInLinks() {
    return (
        <ul className="right">
            <li>
                <NavLink to="/create">New project</NavLink>
            </li>
            <li>
                <NavLink to="/signout">Sign out</NavLink>
            </li>
            <li>
                <NavLink
                    to="/"
                    className="btn btn-floating pink lighten-1"
                >
                    New project
                </NavLink>
            </li>
        </ul>
    );
}
