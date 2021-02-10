import './Profile.css'

function Profile() {
    return (
        <div className="Profile">
            <img id="headshot" alt="Photograph" src={process.env.PUBLIC_URL + '/headshot.png'} />
            <div>
                <p>Bailey Johnson</p>
                <p>Full-Stack Software Engineer</p>
            </div>
        </div>
    )
}

export default Profile;