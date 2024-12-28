import React from 'react'
import AboutBackground from '../assets/about-background.png'
import AbouBAckgrounImage from '../assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container' id='about'>
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src={AbouBAckgrounImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">
                About
            </p>
            <h1 className='primary-heading'>
                Food Is Important Part Of A Balance Diet
            </h1>
            <p className='primary-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quia cumque deserunt mollitia molestias voluptates, excepturi consequatur reiciendis nulla quo illum harum ipsum possimus nemo. Nostrum neque officia numquam sunt?</p>
            <p className="primary-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum a laudantium, nemo libero at maiores aspernatur distinctio architecto voluptate quas omnis fugiat. Fuga iusto eligendi voluptates saepe quo quos eveniet.</p>

            <div className="about-buttons-container">
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'><BsFillPlayCircleFill /> Watch Video</button>
            </div>
        </div>
    </div>
  )
}

export default About