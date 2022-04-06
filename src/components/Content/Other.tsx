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
                <li><b>VS Code</b>: ES7 React/Redux/GraphQL/React-Native Snippets, Live Server, Live Share, ESLint, Prettier, Material Icon Theme</li>
                <li><b>Chrome</b>: React/Redux DevTools</li>
                <li><b>Firefox</b>: Bitwarden, uBlock Origin</li>
                <li><b>Standard Notes Pro</b>: Code Editor, Markdown Pro, Secure Spreadsheets, Midnight Theme</li>
                <li><b>iTerm</b>: Homebrew, OhMyZsh (Cloud Theme)</li>
                <li><b>Magnet, Postman, Cyberduck, Spotify</b></li>
            </ul>

            <h3>What's On My (Virtual) Shelf  📘</h3>
            <p>Listed below are some of my favorite tech-and-non-tech-related books that I've read and would recommend.</p>
            <ul>
                <li><b>Designing Data-Intensive Applications</b> by Martin Kleppmann</li>
                <li><b>Refactoring UI</b> by Adam Wathan and Steve Schoger</li>
                <li><b>Why We Sleep</b> by Matthew Walker</li>
                <li><b>Sea of Tranquility</b> by Emily St. John Mandel</li>
            </ul>
        </React.Fragment>
    )
}

export default Other;