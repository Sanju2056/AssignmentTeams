import React from 'react'
import './index.css'
import { data, mentor } from '../Components/data'
import images from '../Images/1.jpg'

const HomePage = () => {
    const CourseCard = ({ items, id }) => {
        return <div className='course-card' >
            <p className='c-c-title'>{items.courseHeading}</p>
            <p className='detail-text'>View Details</p>
            <div className='course-card-box2'>
                <p className='c-c-price'>{items.price}</p>
                <button className='course-card-button'><p className='btn-text'>Buy Now</p></button>
            </div>
        </div>
    }

    const MentorCard = ({items,id}) => {
        return <div className='mentor-card-div'>
            <div className='image-div'>
                <img src={items.profile} className='img-css' />
            </div>
            <p className='m-name'>{items.name}</p>
            <p className='m-uni'>{items.university}</p>
            <button className='m-button'>Message him now</button>
        </div>
    }
    return (
        <div className='homePage-main'>
            <div className='box1'>
                <h2>Team Page</h2>
                <h4>Learn from Scientists,Research scholars from the top institutes in the world</h4>
                <div className='courses-div'>
                    {
                        data.map((items, index) => {
                            return <CourseCard items={items} id={index} />
                        })
                    }
                </div>
            </div>
            <div className='box2'>
                <h2>Meet Your Mentor</h2>
                <div className='mentor-main'>
                {
                    mentor.map((items,index)=>{
                        return <MentorCard items={items} id={index}/>
                    })
                }
                        
                </div>
            </div>
        </div>
    )
}

export default HomePage