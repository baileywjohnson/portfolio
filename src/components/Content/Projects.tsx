import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaExclamationCircle } from 'react-icons/fa'
import { useEffect } from 'react'

import styled from 'styled-components'

const StyledProject = styled.div`
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    margin-bottom: 20px;

    #top{
        margin-bottom: 10px;
    }

    #bottom{
        display: flex;
        align-items: flex-start;

        #bottom-left{
            width: 60%;

            @media only screen and (max-width: 600px) {
                width: 100%;
            }
        }
    }
        
    }

    #title{
        margin-top: 0;
        margin-bottom: 0;
    }

    #description{
        margin-top: 10px;
    }
`
const ViewLiveLink = styled.a`
    background-color: lightgreen;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid black;
    margin: 5px;
    margin-left: 0px;
    cursor: pointer;
    color: black;
    text-decoration: none;
    font-weight: bold;
    font-size: 15px;
`
const ViewSourceLink = styled.a`
    background-color: lightblue;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid black;
    margin: 5px;
    margin-left: 0px;
    color: black;
    text-decoration: none;
    font-weight: bold;
    font-size: 15px;
`
const ProjectPreview = styled.img`
    margin-left: auto;
    max-width: 40%;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    height: auto;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`
const ProjectTag = styled.div`
    background-color: lightgrey;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid black;
    margin: 5px;
    margin-left: 0px;
    font-size: 13px;
`
const ProjectTags = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const ViewButton = styled.div`
    display: flex;
    align-items: center;

    div{
        padding-top: 2px;
        padding-right: 8px;
    }
`
const WIPWarning = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2em;
    font-weight: bold;

    svg {
        padding-right: 5px;
    }
`
const ViewButtons = styled.div`
    display: flex;
`

const Projects = ({updateParent}:any) => {

    const projectData = [
        {
            preview: '/portfolio_preview.png',
            title: 'portfolio',
            wip: false,
            description: "This portfolio is a static single-page React app built with the create-react-app toolchain and deployed on Github Pages (HashRouter since GH pages lacks support for BrowserRouter). It's using custom-built layouts and components (with some styled components).",
            viewLive: '',
            viewSource: 'https://github.com/baileywjohnson/portfolio',
            tags: ['React', 'Typescript', 'Styled-Components']
        },
        {
            preview: '/the-wall_preview.png',
            title: 'the-wall',
            wip: false,
            description: "The Wall is a single-page app I built with the History API to demo client-side routing without the use of any framework or designated router.  It used to be deployed on Heroku and, while not connected to any data store, does support a version of route-based searching for posts by ID.  Just thought it was something cool to play around with.",
            viewLive: '',
            viewSource: 'https://github.com/baileywjohnson/the-wall',
            tags: ['JS', 'History API', 'Bootstrap']
        },
        {
            preview: '/balance-table_preview.png',
            title: 'balance-table',
            wip: false,
            description: "This project implements a balancing algorithm for placing 'blocks' (integers) on/into a 'table' (two-dimensional matrix), ensuring the calculated center-of-gravity is not to exceed a range at which the table would fall.  It's a Python application that makes use of a library called Eel for building web GUI's (the GUI allows users to input a table size and visualizes the placement algorithm in real-time).  Built for an intro ML course.",
            viewLive: '',
            viewSource: 'https://github.com/baileywjohnson/balance-table',
            tags: ['Python', 'Eel', 'JS']
        },
        {
            preview: '/mpi-matrix-mult_preview.png',
            title: 'mpi-matrix-mult',
            wip: false,
            description: "This project uses C + MPI to perform matrix multiplication in parallel. The project folder contains scripts that generate the matrix files, which are then read in by serial/parallel multipliers. Built for an intro parallel/HPC course, performance benchmarked on XSEDE's COMET cluster.",
            viewLive: '',
            viewSource: 'https://github.com/baileywjohnson/mpi-matrix-mult',
            tags: ['C', 'MPI']
        }
    ]

    useEffect(() => {
        updateParent('Projects');
    });

    return (
        <React.Fragment>
            <h2>Things I've Built &#128736;</h2>
            <p>I've had the opportunity to contribute-to and lead the development on some really cool projects over the last several years. I can't share any source files for these but feel free to ask me about...</p>
            <ul>
                <li><b>Building <a href="https://www.usebracket.com/">Bracket</a> @ Flexport</b></li>
                <br/>
                <li><b>Taking an ML Pipeline from Monolith &#8594; Microservices & Owning Tokenization</b></li>
                <br/>
                <li><b>Supporting ISS Operations Above FCR-1 in the <a href="https://www.nasa.gov/johnson/jsc-mission-control-center/">Mission Control Center</a></b></li>
            </ul>
            <p>For more information about these and other projects I've worked on check out my resume and please don't hesitate to get in touch.</p>
            <h3>Older Projects</h3>
            <p>These are some of my favorites from further back, built either for undergrad courses or for fun. All of the source files for these, along with some other small projects, are available on my personal Github profile.</p>
            <div id="projectBox">
                {
                    projectData.map((project, i) => {
                        return (
                            <StyledProject key={i}>
                                <div id="top">
                                    <h3 id="title">{project.title}</h3>
                                    <p id="description">{project.description}</p>
                                </div>
                                <div id="bottom">
                                    <div id="bottom-left">
                                        <ViewButtons>
                                            {
                                                project.viewLive !== '' ? <ViewLiveLink href={project.viewLive} rel="noreferrer" target="_blank"><ViewButton><div>View Live</div><FaExternalLinkAlt size={18}/></ViewButton></ViewLiveLink> : ""
                                            }
                                            <ViewSourceLink href={project.viewSource} rel="noreferrer" target="_blank"><ViewButton><div>View Source</div><FaGithub id="ghIcon" size={20}/></ViewButton></ViewSourceLink>
                                        </ViewButtons>
                                        <ProjectTags>
                                            {
                                                project.tags.map((tag, i) => {
                                                    return (
                                                        <ProjectTag key={i}>{tag}</ProjectTag>
                                                    )
                                                })
                                            }
                                        </ProjectTags>
                                        {project.wip ? <WIPWarning><FaExclamationCircle size={20}/> This project is a work-in-progress.</WIPWarning> : ""}
                                    </div>
                                    <ProjectPreview alt="project preview" src={process.env.PUBLIC_URL + project.preview}/>
                                </div>
                            </StyledProject>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default Projects;