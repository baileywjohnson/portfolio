import {Link} from 'react-router-dom'

import { FaExternalLinkAlt } from 'react-icons/fa'

import styled from 'styled-components'

interface MenuItemProps {
    clicked: boolean;
}
const MenuItem = styled.div<MenuItemProps>`
    padding-top: 0.8em;
    padding-bottom: 0.8em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    transition: transform .15s;
    -webkit-box-shadow: 0 0 3px #000;
        box-shadow: 0 0 3px #000;
    font-size: 14px;
    border: 1px solid black;
    color: black;

    &:hover{
        transform: scale(1.05);
    }

    background-color: ${p => (p.clicked ? '#3792cb' : 'white')};
    font-weight: ${p => (p.clicked ? 'bold' : 'normal')};

    @media only screen and (max-width: 1200px) {
        margin-left: 5px;
        margin-right: 5px;
    }

    @media only screen and (max-width: 800px) {
        margin-left: 3px;
        margin-right: 3px;
    }

    @media only screen and (max-width: 450px) {
        margin-left: 2px;
        margin-right: 2px;
        padding-left: 2px;
        padding-right: 2px;

        &:hover{
            transform: scale(1.00);
        }
    }
`
const StyledNavMenu = styled.div`

    margin-top: 1em;
    width: 60%;
    margin-left: auto;
    margin-right: auto;

    a {
        width: 20%;
        text-decoration: none;
    }

    @media only screen and (max-width: 1200px) {
        width: 90%;
        display: flex;
    }

    @media only screen and (max-width: 800px) {
        width: 90%;
    }

    @media only screen and (max-width: 400px) {
        width: 99%;
    }
`
const ExternalNavLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        padding-right: 5px;
    }

    @media only screen and (max-width: 800px) {
        svg{
            display: none;
        }
        div{
            padding-right: 0px;
        }
    }
`

const NavMenu = ({displayed}:any) => {
    const pages = ["About", "Projects"];
    const results = pages.map((page) => {
        if(page === displayed){
            return true;
        }
        else{
            return false;
        }
    })

    return (
        <StyledNavMenu>
            <Link to="/about">{results[0] ? <MenuItem clicked={true}>About</MenuItem> : <MenuItem clicked={false}>About</MenuItem>}</Link>
            <Link to="/projects">{results[1] ? <MenuItem clicked={true}>Projects</MenuItem> : <MenuItem clicked={false}>Projects</MenuItem>}</Link>
            <a href="/resume.pdf" target="_blank">
                <MenuItem clicked={false}><ExternalNavLink><div>Resume</div><FaExternalLinkAlt /></ExternalNavLink></MenuItem>
            </a>
        </StyledNavMenu>
    )
}

export default NavMenu;