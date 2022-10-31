import React from 'react'
import { FaStar } from 'react-icons/fa'
import "../../src/components/Styles/GymDetails.css"
import Badge from "./MembershipBadge"

function Memberships() {
  return (
    <>
    <div id="rating">
        <div id="rating-stars">
          <FaStar color = "white"/>
          <FaStar color = "white"/>
          <FaStar color = "white"/>
          <FaStar color = "white"/>
          <FaStar color = "white"/>
        </div>
        <p>5 Ratings</p>
      </div>
    <div id='membership-container'>
      <div id="inner-container">
        <h1>Choose Membership</h1>
        <div id="memberships">
        <Badge no="1" color = "#baff83" bgColor="#619770" plan = "Slim your waist" price = "Rs. 9,999"/>
        <Badge no="2" color = "#b41f6d" bgColor="#a56888" plan = "Giant x" price = "Rs. 12,999"/>
        <Badge no="3" color = "#fd8888" bgColor="#a44946" plan = "Beach body" price = "Rs. 8,999"/>
        <Badge no="4" color = "#baff83" bgColor="#619770" plan = "Fat to Fit" price = "Rs. 7,999"/>        
        <Badge no="5" color = "#fd8888" bgColor="#a44946" plan = "HFX (12 Month)" price = "Rs. 12,999"/>        
        <Badge no="6" color = "#b41f6d" bgColor="#a56888" plan = "HFX (6 Month)" price = "Rs. 8,999"/>        
        <Badge no="7" color = "#baff83" bgColor="#619770" plan = "HFX (3 Month)" price = "Rs. 6,999"/>        
        <Badge no="8" color = "#fd8888" bgColor="#a44946" plan = "HFX (1 Month)" price = "Rs. 3,999"/>       
        </div>
      </div>
    </div>
    </>
  )
}

export default Memberships