import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './ReferandEarn.css'
import { Link } from 'react-router-dom'
import o1img from './images/o1.png'
import o2img from './images/o2.png'
import o3img from './images/o3.png'
import o4img from './images/o4.png'
import o5img from './images/o5.png'
import Ways from './components/Ways/Ways'
import Header from '../Components/Header/Header'

export default function ReferandEarn() {
  const o1 = {
    title:"Invite your Friends",
    description:"Share the link tutedude.com with your friends",
    img:o1img
  }
  const o2 = {
    title:"Friend purchases any course",
    description:"Using your REFERRAL CODE in the payments page",
    img:o2img
  }
  const o3 = {
    title:"You get ₹ 200 as referral money",
    description:"On total purchase the friend makes, into your wallet",
    img:o3img
  }
  const o4 = {
    title:"Your Friend gets ₹ 200 Off ",
    description:"On his overall fee on successful purchase using your referral code ",
    img:o4img
  }
  const o5 = {
    title:"Transfer money from wallet",
    description:"When the wallet balance reaches ₹200 or more, you can withdraw it",
    img:o5img
  }
  const arr = [ o1,o2,o3,o4,o5];


  return (
    <div>
      <Navbar/>
      <Header title = {"UI/UX > Refer & Earn"}/>
      <div className="content">
        <div className="dashboard">
          <div className="balance">
            <div className="items">
              <div className="item">
                <div className='heading'>Referral Earning</div>
                <div>&#8377; 2500</div>
              </div>
              <div className="item">
                <div className='heading'>Total Referrals</div>
                <div>7</div>
              </div>
              <div className="item">
                <div className='heading'>Wallet Balance</div>
                <div>&#8377; 500</div>
              </div>
            </div>
            <button className="withdraw-balance">Withdraw Balance</button>
          </div>
          <div className="referral">  
            <div className="heading">
                Your Referral Code
            </div>
            <div className="referral-code">
                <div className="code">
                  E
                </div>
                <div className="code">
                  D
                </div>
                <div className="code">
                  C
                </div>
                <div className="code">
                  H
                </div>
                <div className="code">
                  5
                </div>
                <div className="code">
                  4
                </div>
            </div>
          </div>
        </div>
        <div className="dashboardpart2">
          <div className="question">
            How does it work ?
          </div>
          <div className="ways">
            {arr.map((ele)=>{
              return (<Ways obj = {ele} key ={ ele.title}/>);
            })}
          </div>
        </div>
      </div>
      <div className="footer">
        <Link to="/FriendsReferred">Friends who enrolled</Link>
        <Link to="*">Terms & Conditions</Link>
      </div>
    </div>
  )
}
