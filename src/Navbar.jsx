import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    
    return (
    <nav className="nav">
        <Link to="/" className="site-title">Yannos Papaevangelou</Link>
        <ul>
            <CustomLink to="/resume">Resume</CustomLink>
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/about">About Me</CustomLink>
            
        </ul>
    </nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>{children}</Link>
        </li>
    )
}