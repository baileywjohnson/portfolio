import './Profile.css'

function Profile() {
    return (
        <div className="Profile">
            <img id="headshot" alt="Photograph" src={process.env.PUBLIC_URL + '/headshot.png'} />
            <div id="profileText">
                <h1 id="profileName">Bailey Johnson</h1>
                <h4 id="profileTitle">Full-Stack Software Engineer</h4>
            </div>
        </div>
    )
}

export default Profile;