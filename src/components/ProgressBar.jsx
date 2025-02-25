import React, { useEffect, useState } from 'react'
import "./ProgressBar.css"

const ProgressBar = ({data}) => {
    const [animatiedProgressbar, setAnimatedProgressbar]=useState(0)

    useEffect(()=>{
        setTimeout(() => {
            setAnimatedProgressbar(data)
            console.log('animated progress')
            
        }, 100);
    },[data])
  return (
    <div>
        <div className='outer'> 
            <div className='inner' style={{
                // width:data+"%",
                transform: `translateX(${animatiedProgressbar-100}%)`,
                background: animatiedProgressbar<30 ? "red":"green"
                
                }} 
                role='progressbar'  
                aria-valuenow={animatiedProgressbar} 
                aria-valuemax="100"
                aria-valuemin="0"
            >
                {animatiedProgressbar}%
            </div>
        </div>
    </div>
  )
}

export default ProgressBar