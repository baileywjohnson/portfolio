import React from 'react'
import { useEffect } from 'react';

import MyStack from './MyStack'

const About = ({updateParent}:any) => {
    useEffect(() => {
        updateParent('About');
    });
    
    return (
        <React.Fragment>
            <h2>Hi &#128075;, I'm Bailey Johnson.</h2>
            <p>I've been a <b>full-stack software engineer</b> at Press Ganey (NarrativeDx/AI Solutions team) since August of 2021. I graduated from Coastal Carolina University (B.S. in Computer Science) in May of 2020 and initially relocated to the Houston-area to work as a SWE at NASA's Johnson Space Center &#128640;. Since accepting my remote position with Press Ganey I've relocated to Seattle.</p>
            <p>I initially built this portfolio to compliment my resume, as somewhere I could showcase my personal projects.  What you're viewing now is the second version (source for the old version <a href="https://github.com/baileywjohnson/portfolio-old" rel="noreferrer" target="_blank">here</a>) which includes some additional content and is something I built to try to sharpen my React & UI/UX-design skills.</p>
            <h3>What's On My Stack</h3>
            <p>Below are some of the tools I'm comfortable leveraging to build software (primarily web applications).  While the list is non-exhaustive, it includes some of what I've been learning/using recently.</p>
            <MyStack />
            <p>I fully accept that what I'm most comfortable with may not always be the best tool for the job so I'm always open to learning something new.  For example, right now I'm learning to write applications in Golang which can scale to handle large numbers of requests thanks to Golang's concurrency support and low memory footprint.</p>
            <h3>More About Me</h3>
            <p>I've been a computer geek pretty much my entire life (as far back as I can remember, anyways). During my early teenage years I began teaching myself to build simple webpages, learning TI-BASIC to make math class more interesting and writing some pretty bad games in Python.  Luckily I had the opportunity to join a CS program during high-school and even get some exposure to the industry before starting my undergraduate degree.</p>
            <p>While I've landed on software engineering, my interests in the CS-realm have shifted a bit over the past several years. Initially I was interested in cybersecurity, which led me to participating in CTF-style events, visiting security conferences, and eventually completing an internship with a cybersecurity/digital forensics company.  Software/web development was a bigger part of that role than expected and I was drawn to the more creative nature of it. Because of this I decided to pursue a full-time software engineering role post-undergrad which has led me to where I am today.</p>
            <p>Some of my personal interests outside of software engineering are self-hosting and PC/VR hardware. When I'm not at my desk I enjoy hiking, longboarding, playing guitar, reading and making coffee &#9749;.</p>
        </React.Fragment>
    )
}

export default About;