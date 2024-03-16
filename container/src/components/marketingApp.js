import {mount} from 'marketing/MarketingApp' // declared in marketing module federation plugin
import React, {useRef, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
export default ()=> {
    const history = useHistory()
    const ref = useRef(null);
    useEffect(()=>{
     
     const {onParentNavigate}=   mount(ref.current, {
            onNavigate: ({pathname: nextPathname})=>{
                console.log('container noticed navigation in marketing app', nextPathname)
                const {pathname} = history.location
                if(pathname !== nextPathname){
                    history.push(nextPathname)
                }
               
            }
        });

        history.listen(onParentNavigate)
    },[])
    return <div ref={ref}></div>
}

