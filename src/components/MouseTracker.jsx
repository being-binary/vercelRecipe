import React, { useEffect, useState } from 'react'

const MouseTracker = () => {
    let [coordinates, SetCoordinates] = useState({x:0, y:0})
    function Movement(e) {
        SetCoordinates({x:e.clientX, y:e.clientY})
    }
    console.log(`w-16 h-16 ring-2 rounded-full absolute top-[${10}px]`)
    useEffect(()=>{
        window.addEventListener('mousemove', Movement)
    },[])
    return (
        <div className='py-[70px] px-1 relative'>
            <h1>test</h1>
            <div className={`w-16 h-16 ring-2 rounded-full absolute top-[${10}+px]`}></div>
        </div>
    )
}

export default MouseTracker
