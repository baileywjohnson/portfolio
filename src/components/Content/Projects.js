import './Projects.css'

function Projects() {

    const handleCloseEvent = () => {

    }

    return (
        <div class='projects'>
            <h2>Projects</h2>
            <p>Below is a combined list of my personal/side projects and projects that I completed during my undergraduate CS program. Click tags to filter by specific technologies used in each project.</p>
            <div id="filterBox">
                <h3>Filters: </h3>
                <div id="filterTag">
                    <div id="tagText">TypeScript</div>
                    <div id="tagCloseButton" onClick={handleCloseEvent}>&#10006;</div>
                </div>
                <div id="filterTag">
                    <div id="tagText">React</div>
                    <div id="tagCloseButton" onClick={handleCloseEvent}>&#10006;</div>
                </div>
                <div id="filterTag">
                    <div id="tagText">GraphQL</div>
                    <div id="tagCloseButton" onClick={handleCloseEvent}>&#10006;</div>
                </div>
                <div id="filterTag">
                    <div id="tagText">PostgreSQL</div>
                    <div id="tagCloseButton" onClick={handleCloseEvent}>&#10006;</div>
                </div>
            </div>
        </div>
    )
}

export default Projects;