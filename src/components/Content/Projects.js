import './Projects.css'

import { FaGithub, FaExternalLinkAlt, FaExclamationCircle } from 'react-icons/fa'

function Projects() {

    const projectData = [
        {
            preview: '/portfolio_preview.png',
            title: 'portfolio',
            wip: true,
            description: "This is the portfolio you're viewing at this very moment. It's a static single-page React app built with the create-react-app toolchain and deployed on Github Pages. It uses all custom-built layouts and components. In the future I'm considering making the switch to Gatsby for speed improvements.",
            viewLive: 'https://baileyjohnson.io',
            viewSource: 'https://github.com/baileywjohnson/portfolio',
            tags: ['React.js', 'Vanilla JS']
        },
        {
            preview: '/the-wall_preview.png',
            title: 'the-wall',
            wip: false,
            description: "The Wall is a single-page app built with vanilla Javascript and the History API to demo client-side routing without the use of any framework or designated router.  It's deployed on Heroku and, while not connected to any data store, does support a version of route-based searching for posts by ID.",
            viewLive: 'https://the-wall-spa.herokuapp.com/',
            viewSource: 'https://github.com/baileywjohnson/the-wall',
            tags: ['Vanilla JS', 'Bootstrap']
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

    return (
        <div className='projects'>
            <h2>&#128736;  Projects</h2>
            <p>Below are some of the projects I've completed over the past several years (either as personal projects or as a part of my undergraduate degree). Read more about each project via the README in it's source repository on Github. Feel free to contact me with any questions.</p>
            <div id="projectBox">
                {
                    projectData.map((project, i) => {
                        return (
                            <div key={i} className="project">
                                <div className="project-topContent">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p class="project-description">{project.description}</p>
                                </div>
                                <div className="project-bottomContent">
                                    <div className="project-bottomLeftContent">
                                        <div className="viewButtons">
                                            {
                                                project.viewLive !== '' ? <a id="view-live" href={project.viewLive} rel="noreferrer" target="_blank"><div id="viewLive"><div id="viewLive-text">View Live</div><FaExternalLinkAlt size={18}/></div></a> : ""
                                            }
                                            <a id="view-source" href={project.viewSource} rel="noreferrer" target="_blank"><div id="viewSource"><div id="viewSource-text">View Source</div><FaGithub id="ghIcon" size={20}/></div></a>
                                        </div>
                                        <div className="projectTags">
                                            {
                                                project.tags.map((tag, i) => {
                                                    return (
                                                        <div className="projectTag" key={i}>{tag}</div>
                                                    )
                                                })
                                            }
                                        </div>
                                        {project.wip ? <div id="wipWarning"><FaExclamationCircle id="warningIcon" size={20}/> This project is a work-in-progress.</div> : ""}
                                    </div>
                                    <img className="projectPreview" alt="project preview" src={process.env.PUBLIC_URL + project.preview}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects;