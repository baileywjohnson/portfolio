import './MyStack.css'

import { useState } from 'react'

import { SiReact, SiTypescript, SiGraphql, SiPostgresql } from 'react-icons/si'

function MyStack() {

    const stackData = [
        {
            name: 'TypeScript',
            icon: <SiTypescript id="itemIcon" size={30}/>,
            description: <p id="itemDescriptionText"><b>TypeScript</b> (and sometimes just plain Javascript depending on the project) is my go-to language for building full-stack applications (<b>Node</b> + <b>Express</b> on the backend).  I really like being able to keep the frontend and backend code in the same language and Typescript providing (optional) static typing makes it easier to catch bugs early on.</p>,
            alternatives: <p id="itemAlternativesText">Some other backend languages I'm comfortable with are <b>Python</b> (Flask), <b>Java</b> and <b>C#</b> (ASP.NET).</p>
        },
        {
            name: 'React',
            icon: <SiReact id="itemIcon" size={30}/>,
            description: <p id="itemDescriptionText"><b>React</b> is my frontend framework of choice. I chose it because liked the ecosystem (component libraries, native tooling, etc.), design patterns, and becuase I was drawn to its increase in popularity over the past several years.</p>,
            alternatives: <p id="itemAlternativesText">I'm not familiar with any other frontend frameworks but I do have some professional experience building frontends with <b>vanilla Javascript</b> and <b>JQuery</b>.</p>
        },
        {
            name: 'GraphQL',
            icon: <SiGraphql id="itemIcon" size={30}/>,
            description: <p id="itemDescriptionText"><b>GraphQL</b> is the one of the newest tools I've started using in some of my side-projects.  A few of the reasons I like it are...<ol><li>I can use it with any database.</li><li>When I hit the GraphQL API, I *usually* get exactly what I asked for (no more, no less).</li><li>It leaves me with one endpoint, and I think that's neat.</li></ol></p>,
            alternatives: <p id="itemAlternativesText">That being said, I've found that GraphQL isn't always the best choice for a backend API, especially if caching responses is a concern (it's also a no-go if the frontend relies on response codes).</p>
        },
        {
            name: 'PostgreSQL',
            icon: <SiPostgresql id="itemIcon" size={30}/>,
            description: <p id="itemDescriptionText"><b>PostgreSQL</b> is generally my pick for a relational SQL database. This could be substituted out for a number of other similar databases as the process for extracting the necessary data to fulfill API requests doesn't really tend to differ all that much (aside from proprietary extensions).  The other relational databases that I have experience working with are <b>SQL Server</b>, <b>MySQL</b> and <b>Oracle</b>.</p>,
            alternatives: <p id="itemAlternativesText">As for NoSQL databases, <b>MongoDB</b> is my go-to (I also have a small amount of experience with <b>Redis</b>, which I think fits in this category).</p>
        }
    ]

    const [dispTile, setDispTile] = useState(stackData[0]);

    const handleItemClick = (e) => {
        setDispTile(stackData[e.currentTarget.getAttribute('key-data')]);
    }

    return (
        <div id="MyStack">
            <div id="itemList">
                {
                    stackData.map((stackItem, i) => {
                        return (
                            <div key={i} key-data={i} onClick={handleItemClick} class={(stackItem.name === dispTile.name) ? "itemTile displayedItemTile" : "itemTile"}>
                                {stackItem.icon}
                                <p key-data={i} id="itemTitle"><b>{stackItem.name}</b></p>
                            </div>
                        );
                    })
                }
            </div>
            <div id="itemDescription">
                {dispTile.description}
                {dispTile.alternatives}
            </div>
        </div>
    )
}

export default MyStack;