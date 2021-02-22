import './About.css'

import MyStack from './MyStack'

function About() {
    return (
        <div className="about">
            <h2>Hi &#128075;, I'm Bailey Johnson.</h2>
            <p>I'm a <b>full-stack software engineer</b> at NASA's Johnson Space Center &#128640;. I graduated from Coastal Carolina University (B.S. in Computer Science) in May of 2020 and have since relocated to the Houston-area.</p>
            <p>I initially built this portfolio to compliment my resume, as somewhere I could showcase my personal projects.  What you're viewing now is the second version (source for the old version <a href="https://github.com/baileywjohnson/portfolio-old" rel="noreferrer" target="_blank">here</a>) which includes my personal blog and is one of the projects I've used to sharpen my React & UI/UX-design skills.</p>
            <h3>What's On My Stack</h3>
            <p>Below are some of the tools I'm comfortable leveraging to build things that need to be built (in this case, mainly web applications).  While the list is non-exhaustive, it includes some of what I've been learning/using recently. Click on each to read a bit about my experience with the specific technology and about some of the alternatives I've used.</p>
            <div id="stackContainer"><MyStack /></div>
            <p>A few of the things I'd like to learn in the future are <b>Next.js</b>, <b>React Native</b>, <b>Electron</b> and <b>Three.js</b>.</p>
            <h3>More About Me</h3>
            <p>I've been a computer geek pretty much my entire life (as far back as I can remember, anyways). During my early teenage years is when I began teaching myself to build simple webpages, learning TI-BASIC to make math class more interesting and writing some pretty bad games in Python.  Luckily I had the opportunity to join a CS program during high-school and even get some exposure to the industry before starting my undergraduate degree.</p>
            <p>While I've landed on full-stack software engineering, my interests in the CS-realm have shifted a bit over the past several years... Initially I was interested in cybersecurity, and that led me to participating in CTF-style events, visiting security conferences, and eventually completing an internship with a cybersecurity/digital forensics company.  Software/web development was a bigger part of the role than expected and I was drawn to the more open-ended & creative nature of it. Because of this I decided to pursue a full-time software engineering role post-undergrad and touched-down at Johnson Space Center.</p>
            <p>Some of my personal interests outside of software engineering are self-hosting and PC/VR hardware. When I'm not at my desk I enjoy biking, longboarding, playing guitar, reading and making coffee &#9749;.</p>
        </div>
    )
}

export default About;