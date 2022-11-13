import React from 'react'
import "./EnrollCard.css"

export default function EnrollCard(props) {
  return (
    <div className='enrollcard'>
      <div className="enrollcard-nav">
        <div className="enrollcard-title">{props.obj.title}</div>
        <div className="enrollcard-date">{props.obj.date}</div>
      </div>
        <div className="enrollcard-courses">
            <div className="enrollcard-courses-title">Courses Enrolled<span>&#40;{props.obj.courses.length}&#41;</span></div>
      <div className="enrollcard-allcourses-scroll">
            <div className="enrollcard-allcourses">
                {props.obj.courses.map((ele,id)=>{
                    return ( <div key={props.obj.title+id} className='course'>{ele}</div>);
                })}
            </div>
            </div>
      </div>
      <div className="enrollcard-amount">
        <div className='enrollcard-amount-container'>
            <p className='enrollcard-amount-title'>Referral Amount <span className='enrollcard-amount-number'>&#8377;{props.obj.total_amount}</span></p>
            </div>
        </div>
    </div>
  )
}
