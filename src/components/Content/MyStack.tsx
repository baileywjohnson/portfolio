import { useState } from 'react'

import { SiReact, SiTypescript, SiGraphql, SiPostgresql } from 'react-icons/si'

import styled from 'styled-components'

const StyledMyStack = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    margin: 0px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
`
const ItemList = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid black;

    p {
        padding-top: 0px;
        margin-top: 5px;
        margin-bottom: 0px;
    }
`
interface ItemTileProps {
    displayed: boolean;
}
const ItemTile = styled.div<ItemTileProps>`
    width: 7em;
    margin: auto;
    text-align: center;
    background-color: lightgray;
    padding: 8px;
    padding-top: 12px;
    border-radius: 5px;
    margin-top: 5px;
    cursor: pointer;
    border-bottom: ${p => (p.displayed ? '2px solid black' : '2px solid white')};
    flex-basis: 20%;

    &:hover{
        border-bottom: 2px solid black;
    }

    svg{
        margin: auto;
    }

    #description{
        margin: 0px;
    }

    #alternatives{
        margin-bottom: 0px;
    }

    @media only screen and (max-width: 800px) {
        flex-basis: 40%;
    }
`
interface ItemIconProps {
    iconColor: string;
}
const ItemIcon = styled.div<ItemIconProps>`
    color: ${p => (p.iconColor)};
`

const MyStack = ({updateParent}:any) => {

    const stackData = [
        {
            name: 'TypeScript',
            icon: <SiTypescript size={30}/>,
            iconColor: '#007ACC',
            description: <p id="description"><b>TypeScript</b> (and sometimes just plain Javascript depending on the project) is my go-to language for building full-stack applications (<b>Node</b> + <b>Express</b> on the backend).  I really like being able to keep the frontend and backend code in the same language and Typescript providing (optional) static typing makes it easier to catch bugs early on.</p>,
            alternatives: <p id="alternatives">Some other backend languages I'm comfortable with are <b>Python</b> (Flask), <b>Java</b> and <b>C#</b> (ASP.NET).</p>
        },
        {
            name: 'React',
            icon: <SiReact size={30}/>,
            iconColor: '#61DBFB',
            description: <p id="description"><b>React</b> is my frontend framework of choice. I chose it because liked the ecosystem (component libraries, native tooling, etc.), design patterns, and becuase I was drawn to its increase in popularity over the past several years.</p>,
            alternatives: <p id="alternatives">I'm not familiar with any other frontend frameworks but I do have some professional experience building frontends with <b>vanilla Javascript</b> and <b>JQuery</b>.</p>
        },
        {
            name: 'GraphQL',
            icon: <SiGraphql size={30}/>,
            iconColor: '#e535ab',
            description: <div id="description"><p><b>GraphQL</b> is the one of the newest tools I've started using in some of my side-projects.  A few of the reasons I like it are...</p><ol><li>I can use it with any database.</li><li>When I hit the GraphQL API, I *usually* get exactly what I asked for (no more, no less).</li><li>It leaves me with one endpoint, and I think that's neat.</li></ol></div>,
            alternatives: <p id="alternatives">That being said, I've found that GraphQL isn't always the best choice for a backend API, especially if caching responses is a concern (it's also a no-go if the frontend relies on response codes).</p>
        },
        {
            name: 'PostgreSQL',
            icon: <SiPostgresql size={30}/>,
            iconColor: '#0064a5',
            description: <p id="description"><b>PostgreSQL</b> is generally my pick for a relational SQL database. This could be substituted out for a number of other similar databases as the process for extracting the necessary data to fulfill API requests doesn't really tend to differ all that much (aside from proprietary extensions).  The other relational databases that I have experience working with are <b>SQL Server</b>, <b>MySQL</b> and <b>Oracle</b>.</p>,
            alternatives: <p id="alternatives">As for NoSQL databases, <b>MongoDB</b> is my go-to (I also have a small amount of experience with <b>Redis</b>, which sort-of fits in this category).</p>
        }
    ]

    const [dispTile, setDispTile] = useState(stackData[0]);

    const handleItemClick = (e:any) => {

        //setDispTile(stackData[e.currentTarget.getAttribute('keyData')]);

        setDispTile(stackData.filter(item => item.name === e.currentTarget.lastChild.innerText)[0]);
    }

    return (
        <StyledMyStack>
            <ItemList>
                {
                    stackData.map((stackItem, i) => {
                        return (
                            <ItemTile key={i} onClick={handleItemClick} displayed={(stackItem.name === dispTile.name) ? true : false}>
                                <ItemIcon iconColor={stackItem.iconColor}>{stackItem.icon}</ItemIcon>
                                <p><b>{stackItem.name}</b></p>
                            </ItemTile>
                        );
                    })
                }
            </ItemList>
            <div>
                {dispTile.description}
                {dispTile.alternatives}
            </div>
        </StyledMyStack>
    )
}

export default MyStack;