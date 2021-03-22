import React from 'react';

import Profile from './Profile'
import Social from './Social'
import NavMenu from './NavMenu'

const Navigation = ({displayed}:any) => {
    return(
        <React.Fragment>
            <Profile />
            <Social />
            <NavMenu displayed={displayed}/>
        </React.Fragment>
    )
}

export default Navigation;