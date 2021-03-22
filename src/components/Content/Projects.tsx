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
            wip: true,
            description: "This is the portfolio you're viewing at this very moment. It's a static single-page React app built with the create-react-app toolchain and deployed on Github Pages (HashRouter since GH pages lacks support for BrowserRouter). It's using custom-built layouts and components (with some styled components). I'm considering making the switch to Gatsby in the future for speed improvements.",
            viewLive: 'https://baileyjohnson.io',
            viewSource: 'https://github.com/baileywjohnson/portfolio',
            tags: ['React', 'Typescript', 'Styled-Components']
        },
        {
            preview: '/the-wall_preview.png',
            title: 'the-wall',
            wip: false,
            description: "The Wall is a single-page app built with vanilla Javascript and the History API to demo client-side routing without the use of any framework or designated router.  It's deployed on Heroku and, while not connected to any data store, does support a version of route-based searching for posts by ID.",
            viewLive: 'https://the-wall-spa.herokuapp.com/',
            viewSource: 'https://github.com/baileywjohnson/the-wall',
            tags: ['Vanilla JS', 'History API', 'Bootstrap']
        },
        {
            preview: '/balance-table_preview.png',
            title: 'balance-table',
            wip: false,
            description: "This project implements a balancing algorithm for placing 'blocks' (integers) on/into a 'table' (two-dimensional matrix), ensuring the calculated center-of-gravity is not to exceed a range at which the table would fall.  It's a Python desktop application that makes use of a library called Eel for building web GUI's (the GUI allows users to input a table size and visualizes the placement algorithm in real-time).",
            viewLive: '',
            viewSource: 'https://github.com/baileywjohnson/balance-table',
            tags: ['Python', 'Eel', 'Vanilla JS']
        },
        {
            preview: '/mpi-matrix-mult_preview.png',
            title: 'mpi-matrix-mult',
            wip: false,
            description: "This project uses C + MPI to perform matrix multiplication in parallel. The project folder contains scripts that generate the matrix files, which are then read in by serial/parallel multipliers. Built for an introductory parallel computing course, performance benchmarked on XSEDE's COMET cluster.",
            viewLive: '',
            viewSource: 'https://github.com/baileywjohnson/mpi-matrix-mult',
            tags: ['C', 'MPI', 'GNU Make']
        }
    ]

    useEffect(() => {
        updateParent('Projects');
    });

    return (
        <React.Fragment>
            <h2>&#127912;  Projects</h2>
            <p>Below are some of the projects I've completed over the past several years (either as personal projects or as a part of my undergraduate degree). Read more about each project via the README in it's source repository on Github. Feel free to contact me with any questions.</p>
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