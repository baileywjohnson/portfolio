import Profile from './Profile'
import Social from './Social'
import NavMenu from './NavMenu'

function Navigation({displayed}:any) {
    return (
        <div>
            <Profile />
            <Social />
            <NavMenu displayed={displayed}/>
        </div>
    )
}

export default Navigation;