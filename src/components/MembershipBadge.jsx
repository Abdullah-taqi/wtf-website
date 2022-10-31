import React from 'react'
import logo from "../assets/logo.png"
import "../../src/components/Styles/GymDetails.css"

function MembershipBadge(props) {
  return (
    <div id='membership-badge' style={{ backgroundColor: `${props.bgColor}` }}>
        <p>PLAN {props.no}</p>
        <div id="plan-name-price">
            <div id="plan-name">
                <img src={logo} alt="logo" />
                <h2 style={{ color: `${props.color}` }}>{props.plan}</h2>
            </div>
            <div id="price">
                {props.price}
            </div>
        </div>
    </div>
  )
}

export default MembershipBadge