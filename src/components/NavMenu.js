import './NavMenu.css'

import {Link} from 'react-router-dom'

function NavMenu({displayed}) {
    //Apply Certain Style to "displayed" Content Link
    console.log(displayed);

    //give displayed the menuItemClicked class
    const pages = ["About", "Projects", "Blog", "Other"];
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
                <div className={results[0]}>About Me</div>
            </Link>
            <Link to="/projects" className="menuItemLink">
                <div className={results[1]}>Projects</div>
            </Link>
            <a href="/resume.pdf" className="menuItemLink" target="_blank">
                <div className="menuItem">Resume &#11015;</div>
            </a>
            <Link to="/blog" className="menuItemLink">
                <div className={results[2]}>Blog</div>
            </Link>
            <Link to="/other" className="menuItemLink">
                <div className={results[3]}>Other</div>
            </Link>
        </div>
    )
}

export default NavMenu;