import './Social.css'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

function Social() {
    return (
        <div className="Social">
            <a className="flexItem" href="https://github.com/baileywjohnson" rel="noreferrer" target="_blank"><FaGithubSquare size={30}/></a>
            <a className="flexItem" href="https://www.linkedin.com/in/baileywjohnson/" rel="noreferrer" target="_blank"><FaLinkedin size={30}/></a>
            <a className="flexItem" href="https://twitter.com/baileywjohnsonx" rel="noreferrer" target="_blank"><FaTwitterSquare size={30}/></a>
        </div>
    )
}

export default Social;