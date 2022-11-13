import React from 'react'
import "./Ways.css"

export default function Ways(p) {
  const props = p.obj;
  return (
    <div className='ways-container'>
      <div className="ways-logo">
        <img src={props.img} alt="logo1" />
      </div>
      <div className="ways-content">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  )
}
