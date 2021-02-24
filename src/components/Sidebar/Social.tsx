import { FaGithubSquare, FaLinkedin, FaTwitterSquare, FaEnvelopeSquare } from 'react-icons/fa'

import styled from 'styled-components'

const StyledSocial = styled.div`
    display: flex;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1em;

    @media only screen and (max-width: 1200px) {
        width: 40%;
    }

    a {
        width: 25%;
        color: black;
    }
    
    a svg{
        border-radius: 5px;
    }
    
    a svg:hover{
        background-color: white;
        -webkit-transition: background-color 400ms;
        -ms-transition: background-color 400ms;
        transition: background-color 400ms;
    }
`

const Social = () => {
    return (
        <StyledSocial>
            <a href="https://github.com/baileywjohnson" rel="noreferrer" target="_blank"><FaGithubSquare size={30}/></a>
            <a href="https://www.linkedin.com/in/baileywjohnson/" rel="noreferrer" target="_blank"><FaLinkedin size={30}/></a>
            <a href="https://twitter.com/baileywjohnsonx" rel="noreferrer" target="_blank"><FaTwitterSquare size={30}/></a>
            <a href="mailto:baileywjohnson@gmail.com" rel="noreferrer" target="_blank"><FaEnvelopeSquare size={30}/></a>
        </StyledSocial>
    )
}

export default Social;