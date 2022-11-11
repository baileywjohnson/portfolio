import { useState } from 'react'

import { SiReact, SiPython, SiAmazonaws, SiPostgresql } from 'react-icons/si'

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
            name: 'Python',
            icon: <SiPython size={30}/>,
            iconColor: '#ffd343',
            description: <p id="description"><b>Python</b> is currently my go-to language for building applications quickly (<b>Django</b>, <b>Flask</b> or <b>FastAPI</b>) and is also the language I'm most proficient in.  While I do value being able to keep the frontend and backend code in the same language (i.e. full-stack JS/TS projects), I think the readability of a well-written Python backend makes up for it.</p>,
            alternatives: <p id="alternatives">Some other backend languages I'm comfortable with are <b>Javascript/Typescript</b> (Express), <b>Java</b> (Spring, Javalin + Maven) and <b>C#</b> (ASP.NET).</p>
        },
        {
            name: 'React',
            icon: <SiReact size={30}/>,
            iconColor: '#61DBFB',
            description: <p id="description"><b>React</b> is my frontend framework of choice. I really like the ecosystem (component libraries, native tooling, etc.) and design patterns the framework encourages.</p>,
            alternatives: <p id="alternatives">The only other frontend framework I have professional experience with is <b>Vue.js</b>.</p>
        },
        {
            name: 'PostgreSQL',
            icon: <SiPostgresql size={30}/>,
            iconColor: '#0064a5',
            description: <p id="description"><b>PostgreSQL</b> is generally my pick for a relational SQL database. The other relational databases that I have experience working with are <b>SQL Server</b> and <b>MySQL</b>.</p>,
            alternatives: <p id="alternatives">As for NoSQL databases, <b>MongoDB</b> is my go-to doc store, only because it's what I have experience with (I also have a small amount of experience with <b>Redis</b> as a message broker for Celery).  I don't have much experience with wide-column or graph stores but they are things I'm interested in learning about.</p>
        },
        {
            name: 'AWS',
            icon: <SiAmazonaws size={30}/>,
            iconColor: '#00a8e1',
            description: <p id="description"><b>AWS</b> is a beast of it's own but it's something I've become more and more familiar with in my current position. I've learned to manage EC2 instances, deploy <b>Docker</b> containers to ECS from <b>Jenkins</b>, leverage S3 buckets for fast access to files and (very recently) started working with EKS clusters.</p>,
            alternatives: <p id="alternatives">One of my hobbies is self-hosting so I'm familiar with a few other cloud providers like <b>DigitalOcean</b> and <b>Heroku</b>.</p>
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