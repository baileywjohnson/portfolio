import {Link} from 'react-router-dom'
import './NotFound.css'

function NotFound() {
    return (
        <div className="notFound">
            <h3>Not Found</h3>
            <Link to="/about" className="menuItemLink">Get Me Out of Here</Link>
        </div>
    )
}

export default NotFound;