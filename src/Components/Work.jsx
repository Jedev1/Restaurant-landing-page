import React from 'react'
import PickMeals from '../assets/pick-meals-image.png'
import ChooseMeals from '../assets/choose-image.png'
import DeliveryMeals from '../assets/delivery-image.png'

const Work = () => {

    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "loremkfjheoiuber grjn4hnt4iojg gt4 h4thn54th t5h t5h t54 65j 5yjh 5yh4tjbnejiogberjognog rrgrt4hthtyhjt54 ghg4th463",
        },
        {
            image: ChooseMeals,
            title: "Choose New Often",
            text: "loremkfjheoiuber grjn4hnt4iojg gt4 h4thn54th t5h t5h t54 65j 5yjh 5yh4tjbnejiogberjognog rrgrt4hthtyhjt54 ghg4th463",
        },
        {
            image: DeliveryMeals,
            title: "Fast Delivery",
            text: "loremkfjheoiuber grjn4hnt4iojg gt4 h4thn54th t5h t5h t54 65j 5yjh 5yh4tjbnejiogberjognog rrgrt4hthtyhjt54 ghg4th463",
        },
    ]

  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-subheading">How It Works</h1>
            <p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto quas reprehenderit quo laboriosam illo iste minus provident, at distinctio quos cum animi nostrum doloribus aperiam ullam voluptatem vero aliquid.</p>
        </div>

        <div className="work-section-bottom">
            {
                workInfoData.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work