import {useEffect} from 'react'

function Other({updateParent}:any) {
    useEffect(() => {
        updateParent('Other');
    });
    return (
        <div className='other'>
            <h2>&#128161; Other</h2>
            <p>This page contains a few other things I thought might be interesting to include in my portfolio (it also serves as a decent reference for when I need to set-up/reconfigure a development machine).</p>
        </div>
    )
}

export default Other;