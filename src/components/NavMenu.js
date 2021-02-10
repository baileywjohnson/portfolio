import {Link} from 'react-router-dom'

function NavMenu() {
    return (
        <div className="NavMenu">
            <Link to="/about">About Me</Link><br/>
            <Link to="/projects">Projects</Link><br/>
            <a href="/resume.pdf" target="_blank">Resume</a><br/>
            <Link to="/blog">Blog</Link><br/>
            <Link to="/other">Other</Link><br/>
        </div>
    )
}

export default NavMenu;