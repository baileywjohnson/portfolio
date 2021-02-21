import './Projects.css'

import { useState, useEffect } from 'react'

function Projects() {

    const projectData = [
        {
            preview: '/portfolio-preview.png',
            title: 'example-project',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum nisi consectetur porta vestibulum. Ut at laoreet urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            viewLive: 'https://www.google.com',
            viewSource: 'https://www.github.com',
            tags: ['tag2']
        }
    ]

    const [currentFilters, setCurrentFilters] = useState(['tag3']);
    const [displayedProjects, setDisplayedProjects] = useState(projectData);

    const handleCloseEvent = (e) => {
        setCurrentFilters(
            currentFilters.filter((filterTitle) => {
                if(filterTitle === e.currentTarget.childNodes[0].innerHTML){
                    return false;
                }
                else{
                    return true;
                }
            })
        );
        setDisplayedProjects(
            projectData.filter((project) => {
                for(let filter in currentFilters){
                    if(project.tags.includes(filter)){
                        return true;
                    }
                }
                return false;
            })
        );
    }

    const handleOpenEvent = (e) => {
        if(!currentFilters.includes(e.currentTarget.childNodes[0].innerHTML)){
            console.log();
            setCurrentFilters([...currentFilters, e.currentTarget.childNodes[0].innerHTML]);
        }
        setDisplayedProjects(
            projectData.filter((project) => {
                for(let filter in currentFilters){
                    console.log(filter);
                    if(project.tags.includes(filter)){
                        return true;
                    }
                }
                return false;
            })
        );
    }

    return (
        <div className='projects'>
            <h2>Projects</h2>
            <p>Below is a combined list of my personal/side projects and projects that I completed during my undergraduate CS program. Click tags to filter by specific technologies used in each project.</p>
            <div className="filterBox">
                <h3 id="filterBox-title">Filters: </h3>
                {
                    currentFilters.map((filter, i) => {
                        return (
                            <div key={i} className="filterTag" onClick={handleCloseEvent}>
                                <div className="tagText">{filter}</div>
                                <div id="tagCloseButton">&#10134;</div>
                            </div>
                        )
                    })
                }
            </div>
            <div id="projectBox">
                {
                    displayedProjects.map((project, i) => {
                        return (
                            <div key={i} className="project">
                                <div className="project-topContent">
                                    <img className="projectPreview" alt="project preview" src={process.env.PUBLIC_URL + project.preview}/>
                                    <h4 className="project-title">{project.title}</h4>
                                    <p id="project-description">{project.description}</p>
                                    <div className="viewButtons">
                                        {
                                            project.viewLive !== '' ? <a href="https://google.com" rel="noreferrer" target="_blank"><div id="view-live">View Live</div></a> : ""
                                        }
                                        <a href="https://github.com" rel="noreferrer" target="_blank"><div id="view-source">View Source</div></a>
                                    </div>
                                </div>
                                <div className="filterBox">
                                    {
                                        project.tags.map((tag, i) => {
                                            return(
                                                <div key={i} className="filterTag" onClick={handleOpenEvent}>
                                                    <div className="tagText">{tag}</div>
                                                    <div id="tagOpenButton">&#10133;</div>
                                                </div>
                                            )
                                        })
                                    }
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