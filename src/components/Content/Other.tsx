import React from 'react'
import {useEffect} from 'react'

const Other = ({updateParent}:any) => {
    
    useEffect(() => {
        updateParent('Other');
    });

    return (
        <React.Fragment>
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

            <h3>What's On My Shelf  📘</h3>
            <p>Listed below are some of my favorite tech-related books that I've read and continue to use as references when necessary.</p>
            <ul>
                <li><b>Clean Code</b> by Robert Cecil Martin</li>
                <li><b>Clean Architecture</b> by Robert Cecil Martin</li>
                <li><b>Designing Data-Intensive Applications</b> by Martin Kleppmann</li>
                <li><b>Refactoring UI</b> by Adam Wathan and Steve Schoger</li>
            </ul>
        </React.Fragment>
    )
}

export default Other;