import React, { useEffect, useState } from 'react'
import { TextConfig } from '../panel_items/TextConfig'

export const TextHome = () => {
    const [height, setHeight] = useState(0)

    const handleScroll = () => {
        const position = window.pageYOffset;
        setHeight(position)
    }

    useEffect(() => {
      window.addEventListener("scroll", handleScroll)
    }, [height])
    
  return (
    <>
        <div className='absolute w-full top-2/3 z-10 min-h-screem'>
            <div className='top-5'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,64L80,101.3C160,139,320,213,480,256C640,299,800,309,960,288C1120,267,1280,213,1360,186.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <div className='mb-4 bg-white h-96 mb-96'>
                <TextConfig height={height} />
            </div>
        </div>
    </>
  )
}
