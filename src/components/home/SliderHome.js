import React from 'react'
import { Fade } from 'react-slideshow-image';
import images from '../../assets/image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
      url: images['home1']
    },
    {
        url: images['home2'],
    },
    {
        url: images['home3'],
    },
  ];

export const SliderHome = () => {
    return (
        <div className="pt-20">
            <Fade transitionDuration="2000">
                {slideImages.map((slideImage, index)=> (
                    <div className="h-screen" key={index}>
                        <img className='w-full' src={slideImage.url} alt="Slider"/>
                    </div>
                ))} 
            </Fade>
        </div>
    )
}
