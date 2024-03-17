import {mount} from 'auth/AuthApp'
import React, {useRef, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
export default ()=> {
    const history = useHistory()
    const ref = useRef(null);
    useEffect(()=>{
     
     const {onParentNavigate}=   mount(ref.current, {
            onNavigate: ({pathname: nextPathname})=>{
                console.log('container noticed navigation in Auth app', nextPathname)
                const {pathname} = history.location
                if(pathname !== nextPathname){
                    history.push(nextPathname)
                }
               
            },
            initialPath: history.location.pathname
        }, );

        history.listen(onParentNavigate)
    },[])
    return <div ref={ref}></div>
}

