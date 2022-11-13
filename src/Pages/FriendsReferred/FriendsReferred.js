import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Header from '../Components/Header/Header'
import './FriendsReferred.css'
import EnrollCard from './Components/EnrollCard/EnrollCard'
import backArrow from './images/back-arrow.png'
import { Link } from 'react-router-dom'

export default function FriendsReferred() {

    const o1 = {
        title:"Dhiraj Saxena",
        date: "14 Sep, 2022",
        courses: ["UI/UX","Photoshop","Illustrator","Python","MERN","Java"],
        total_amount:185
    };
    const o2 = {
        title:"Subhash Mishra",
        date: "15 Sep, 2022",
        courses: ["UI/UX","Photoshop","Illustrator","Python","MERN","Java","C++","Javascript","React"],
        total_amount:485
    };
    const o3 = {
        title:"Prafull Kumar",
        date: "18 Sep, 2022",
        courses: ["UI/UX","Photoshop","Illustrator","Python","MERN","Java","C++"],
        total_amount:485
    };

    const referral_cards =[o1,o2,o3];




  return (
    <div>
      <Navbar />
      <Header title={"UI/UX > Refer & Earn > Friends Referred "} />
      <Link  to="/"><img className='arrow' src={backArrow} alt="arrow"/></Link><Link to="/" className='Go-Back'>go back</Link>
      <div className='content2'>
        <div className="dashboard2">
            <div className="referral2">
                <div className="referral-title2">
                Your Referral Code 
                </div>
                <div className="referral-code2">
                    <div className="code-data">
                        E
                    </div>
                    <div className="code-data">
                        D
                    </div>
                    <div className="code-data">
                        C
                    </div>
                    <div className="code-data">
                        H
                    </div>
                    <div className="code-data">
                        5
                    </div>
                    <div className="code-data">
                        4
                    </div>
                </div>
            </div>
            <div className="wallet2-bg">
                <div className="wallet2">
                    <div className="wallet-title2">
                    Wallet Balance
                    </div>
                    <div className="wallet-amount">
                            ₹ 500
                    </div>
                </div>
            </div>
        </div>
        <div className="enroll">
            <p className='enroll-title'>Friends who Enrolled</p>
            <div className="enroll-scroll-3D"></div>
            <div className="enroll-scroll">
                <div className="enroll-scrollhandle">
                    <div className="enroll-display">
                        {referral_cards.map((ele)=>{
                            return(<EnrollCard obj = {ele} key={ele.title + ele.date}/>);
                        })}
                    </div>
                </div>
            </div>
        </div>
      </div>
    <div className="footer">
        <Link to="*">Terms & Conditions</Link>
    </div>
    </div>
  )
}
