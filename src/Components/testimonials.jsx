import React from 'react'
import ProfilePic from '../assets/john-doe-image.png'
import { AiFillStar} from 'react-icons/ai'

const testimonials = () => {
  return (
    <div className='work-section-wrapper' id='testimonial'>
        <div className="work-section-top">
            <p className="primary-subheading">Testimonials</p>
            <h1 className="primary-heading">What They Are Saying</h1>
            <p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero id iure totam quis iusto tempora alias voluptatum voluptas repellendus quo velit eligendi reprehenderit enim qui maxime excepturi at, repudiandae dicta.</p>
        </div>

        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla doloribus labore nesciunt natus ullam. Minus ab natus asperiores incidunt nulla doloribus eos voluptates quos sed eaque, omnis, optio sit a?</p>

            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>

            <h2>John Doe</h2>
        </div>
    </div>
  )
}

export default testimonials