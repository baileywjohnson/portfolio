import React from 'react'
import { useEffect } from 'react';

const About = ({updateParent}:any) => {
    useEffect(() => {
        updateParent('About');
    });
    
    return (
        <React.Fragment>
            <h2>Hi &#128075;, I'm Bailey.</h2>
            <p>I'm a <b>software engineer</b> at <a href="https://www.flexport.com/">Flexport</a>. I have experience building and owning services & APIs that power complex applications. I like handling software integrations and really dig distributed systems.</p>
            <h3>Quick Overview</h3>
            <p>In May of 2020 &#129440;, after a short internship at <a href="https://www.dnsfilter.com/">DNSFilter</a> and about a year and a half of co-op dev work at <a href="https://www.wetstonetech.com/">WetStone</a> (2016 - 2019), I graduated from Coastal Carolina University with a B.S. in Computer Science. I then relocated from South Carolina to the Houston-area to work full-time as a SWE at <a href="https://www.nasa.gov/">NASA's</a> Johnson Space Center &#128640;.</p>
            <p>A little over a year later I accepted a fully remote position with <a href="https://www.pressganey.com/">Press Ganey</a> (NarrativeDx). I grew a lot in that role and it also afforded me the opportunity to work from anywhere in the states (a.k.a. the ability to escape the crippling heat and humidity of the southeast).</p>
            <p>I visited Seattle in February of 2022 and fell in love with it, so eight months later I packed up my things and drove across the country.  About five months after that is when I accepted an offer from Flexport to join their Demand Engineering team.</p>
            <h3>More About Me</h3>
            <p>I've been a computer geek pretty much my entire life. In middle school I was building webpages, learning TI-BASIC and writing some pretty bad games in Python.  I had the opportunity to join a <a href="https://www.horrycountyschools.net/domain/248">CS program</a> during high-school and also started my first internship senior year.</p>
            <p>While I've landed on software engineering, I was pretty interested in cybersecurity growing up. It led me to some security conferences, CTF-events and eventually to me landing that co-op position with WetStone (doing development to support their security/digital forensics tools). I think it was there I realized I was less interested in security professionally and really just liked building software.</p>
            <p>When I'm not at my desk I like live music, hiking, longboarding, playing guitar and making coffee &#9749;.</p>
        </React.Fragment>
    )
}

export default About;