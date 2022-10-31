import React from 'react'
import "../../src/components/Styles/GymDetails.css"
import { FaMapMarked } from "react-icons/fa";
import c1 from "../assets/c1.JPG"
import c2 from "../assets/c2.JPG"
import c3 from "../assets/c3.JPG"
import c4 from "../assets/c4.JPG"
import wicon from "../assets/w-icon.JPG"

function Details() {
  return (
    <div id='detail-container'>
      <div id="inner-details">
        <h1>WTF: Naresh Sir Gym</h1>
        <div id="details-address">
        <FaMapMarked color='green' /><p>A 452 Basement, New Ashok Nagar</p>
        </div>
        <h2>Description</h2>
        <p>WTF: Naresh Sir Gym is one of the greatest gyms in Ashok Nagar, including Aerobics, Yoga, Gym functional trainers, Olympic deadlift barbells, punching bags, Tyre training, and other weight loss activities. Their program includes pilates that leverages the body's inherent movement patterns.</p>
        <h2>Facilities</h2>
        <div id="facilities">
          <div className="facility-item"><p>Sanitized Gym</p></div>
          <div className="facility-item"><p>Skilled Trainer</p></div>
          <div className="facility-item"><p>Modern Equipments</p></div>
          <div className="facility-item"><p>Fully AC</p></div>
          <div className="facility-item"><p>CCTV</p></div>
          <div className="facility-item"><p>Parking</p></div>
        </div>
        <h2>Why to choose WTF?</h2>
        <div id="choose-container">
          <div className="choose-div">
            <img src={c1} alt="" />
            <p>Earn WTF rewards coin</p>
          </div>
          <div className="choose-div">
            <img src={c2} alt="" />
            <p>Fully Vaccinated Staff</p>
          </div>
          <div className="choose-div">
            <img src={c3} alt="" />
            <p>Travel Fitness Journey</p>
          </div>
          <div className="choose-div">
            <img src={c4} alt="" />
            <p>Pocket Friendly Membership</p>
          </div>
        </div>
        <h2>How it works?</h2>
        <div id="works-div">
          <div className="work">
            <img src={wicon} alt="" srcset="" />
            <p>Pick membership start date and complete your subscription process by clicking Buy Now below.</p>
          </div>
          <div className="work">
            <img src={wicon} alt="" srcset="" />
            <p>A dedicated general trainer will be assigned after you have taken youu subscription.</p>
          </div>
          <div className="work">
            <img src={wicon} alt="" srcset="" />
            <p>Explore WTF and start your fitness journey.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details