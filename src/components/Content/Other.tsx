import {FaRedditSquare, FaYCombinator, FaNewspaper} from 'react-icons/fa'
import {SiSlashdot} from 'react-icons/si'
import {DiTechcrunch} from 'react-icons/di'

import {useEffect} from 'react'

import styled from 'styled-components'

const NewsLinks = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    flex-wrap: wrap;
`
const NewsLinksColumn = styled.div`
    margin: 5px;
    width: 40%;

    a{
        text-decoration: none;
    }

    @media only screen and (max-width: 800px) {
        margin: 0px;
        width: 50%;
    }
`
const NewsLink = styled.div`
    padding: 5px;
    padding-left: 2em;
    padding-right: 2em;
    border: 1px solid black;
    border-radius: 10px;
    margin: 5px;
    cursor: pointer;
    color: black;
    background: white;
    text-decoration: none;
    justify-content: center;
    display: flex;
    align-items: center;
    font-weight: bold;
    
    -moz-transition: all .15s ease-in;
    -o-transition: all .15s ease-in;
    -webkit-transition: all .15s ease-in;
    transition: all .15s ease-in;

    div {
        padding: 5px;
        padding-right: 10px;
    }

    &:hover{
        background-color: lightgrey;
    }
`

const Other = ({updateParent}:any) => {
    
    useEffect(() => {
        updateParent('Other');
    });

    return (
        <div className='other'>
            <h2>&#128161; Other</h2>
            <p>This page contains a few other things I thought might be interesting to include in my portfolio (it also serves as a decent reference for when I need to set-up/reconfigure my dev tools).</p>

            <h3>Essentials for My Development Machine  💻</h3>
            <p>macOS is my preferred operating system for development and there are several applications/add-ons I think are necessary to make it fit my needs a bit better.</p>
            <ul>
                <li><b>VS Code</b>: ES7 React/Redux/GraphQL/React-Native Snippets, Live Server, Live Share, ESLint, Prettier, Material Icon Theme, Dracula Pro</li>
                <li><b>Chrome</b>: React/Redux DevTools</li>
                <li><b>Firefox</b>: Bitwarden, uBlock Origin, HTTPS Everywhere, Privacy Badger</li>
                <li><b>Standard Notes</b>: Code Editor, Markdown Pro, Secure Spreadsheets, Midnight Theme</li>
                <li><b>iTerm</b>: Homebrew, OhMyZsh (Cloud Theme), Dracula Pro</li>
                <li><b>Magnet, Postman, Cyberduck</b></li>
            </ul>

            <h3>Where I Get My (Tech) News  📰</h3>
            <p>I use a custom launch-page for my web browser that has a few different categories of links on it, one of those categories being for news pages that I check pretty regularly.</p>
            <NewsLinks>
                <NewsLinksColumn>
                    <a href="https://www.reddit.com/" target="_blank" rel="noreferrer"><NewsLink id="redditLink"><div>Reddit</div><FaRedditSquare size={20}/></NewsLink></a>
                    <a href="https://www.slashdot.org/" target="_blank" rel="noreferrer"><NewsLink id="sdLink"><div>Slashdot</div><SiSlashdot size={15}/></NewsLink></a>
                    <a href="https://www.techcrunch.com/" target="_blank" rel="noreferrer"><NewsLink id="tcLink"><div>TechCrunch</div><DiTechcrunch size={20}/></NewsLink></a>
                </NewsLinksColumn>
                <NewsLinksColumn>
                    <a href="https://news.ycombinator.com/" target="_blank" rel="noreferrer"><NewsLink id="hnLink"><div>Hacker News</div><FaYCombinator size={20}/></NewsLink></a>
                    <a href="https://www.arstechnica.com/" target="_blank" rel="noreferrer"><NewsLink id="atLink"><div>ArsTechnica</div><FaNewspaper size={20}/></NewsLink></a>
                    <a href="https://lobste.rs/" target="_blank" rel="noreferrer"><NewsLink id="lbLink"><div>Lobsters</div><FaNewspaper size={20}/></NewsLink></a>
                </NewsLinksColumn>
            </NewsLinks>

            <h3>What's On My Shelf  📘</h3>
            <p>Listed below are some of my favorite tech-related books that I've read and continue to use as references when necessary.</p>
            <ul>
                <li><b>Clean Code</b> by Robert Cecil Martin</li>
                <li><b>Clean Architecture</b> by Robert Cecil Martin</li>
                <li><b>Designing Data-Intensive Applications</b> by Martin Kleppmann</li>
                <li><b>Refactoring UI</b> by Adam Wathan and Steve Schoger</li>
            </ul>
        </div>
    )
}

export default Other;