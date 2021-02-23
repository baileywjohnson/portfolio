import './NavMenu.css'

import {Link} from 'react-router-dom'

import { FaExternalLinkAlt } from 'react-icons/fa'

function NavMenu({displayed}) {
    //Apply Certain Style to "displayed" Content Link
    console.log(displayed);

    //give displayed the menuItemClicked class
    const pages = ["About", "Projects", "Other"];
    const results = pages.map((page) => {
        if(page === displayed){
            return "menuItem menuItemClicked";
        }
        else{
            return "menuItem";
        }
    })
    console.log(results);

    return (
        <div className="NavMenu">
            <Link to="/about" className="menuItemLink">
                <div className={results[0]}>About</div>
            </Link>
            <Link to="/projects" className="menuItemLink">
                <div className={results[1]}>Projects</div>
            </Link>
            <a href="/resume.pdf" className="menuItemLink" target="_blank">
                <div className="menuItem"><div id="resumeView"><div id="resumeView-text">Resume</div><FaExternalLinkAlt class="externalNavLinkIcon"/></div></div>
            </a>
            <a href="https://medium.com/@baileywjohnson" className="menuItemLink" target="_blank" rel="noreferrer">
                <div className="menuItem"><div id="blogView"><div id="blogView-text">Blog</div><FaExternalLinkAlt class="externalNavLinkIcon"/></div></div>
            </a>
            <Link to="/other" className="menuItemLink">
                <div className={results[2]}>Other</div>
            </Link>
        </div>
    )
}

export default NavMenu;