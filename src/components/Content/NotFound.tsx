import {Link} from 'react-router-dom'

import { useEffect } from 'react'

import styled from 'styled-components'

const StyledNotFound = styled.div`
    text-align: center;

    h1 {
        font-size: 75px;
    }

    a {
        cursor: pointer;
        border: 1px solid black;
        padding: 5px;
        border-radius: 10px;
        text-decoration: none;
        color: black;

        -moz-transition: all .15s ease-in;
        -o-transition: all .15s ease-in;
        -webkit-transition: all .15s ease-in;
        transition: all .15s ease-in;
    }

    a:hover {
        background-color: lightgrey;
    }
`

const NotFound = ({updateParent}:any) => {

    useEffect(() => {
        updateParent('');
    });

    return (
        <StyledNotFound>
            <h2>This Page Does Not Exist</h2>
            <h1>🧐</h1>
            <Link to="/about">Get Me Out of Here</Link>
        </StyledNotFound>
    )
}

export default NotFound;