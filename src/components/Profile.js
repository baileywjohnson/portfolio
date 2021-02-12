import './Profile.css'

import {useState} from 'react'

function Profile() {
    const [gifShown, setGifShown] = useState(false);

    return (
        <div className="Profile">
            <img id="headshot" onMouseEnter={() => setGifShown(true)} onMouseLeave={() => setGifShown(false)} alt="Photograph" src={gifShown ? process.env.PUBLIC_URL + '/headshot.gif' : process.env.PUBLIC_URL + '/headshot.png'} />
            <div id="profileText">
                <h2 id="profileName">Bailey Johnson</h2>
                <h4 id="profileTitle">Full-Stack Software Engineer</h4>
            </div>
        </div>
    )
}

export default Profile;