import React from 'react'
import styled from 'styled-components'

const ProfilePhoto = styled.img`
    width: 40%;
    border-radius: 50%;
    border: 5px solid black;
    padding: 3px;
    background-color: #fff;

    @media only screen and (max-width: 1200px) {
        width: 15%;
    }

    @media only screen and (max-width: 800px) {
        width: 22%;
    }
`

const ProfileText = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;

    h2{
        margin-bottom: 5px;
    }

    h4{
        margin-top: 0px;
        padding-top: 0px;
        margin-bottom: 0px;
        color: white;
    }
`

const Profile = () => {
    return (
        <React.Fragment>
            <ProfilePhoto alt="Profile Photo" src={process.env.PUBLIC_URL + '/headshot.png'} />
            <ProfileText>
                <h2>Bailey Johnson</h2>
                <h4>Software Engineer</h4>
                <h4>Seattle, WA</h4>
            </ProfileText>
        </React.Fragment>
    )
}

export default Profile;