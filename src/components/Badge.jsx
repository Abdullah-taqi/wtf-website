import React from 'react'
import i1 from "../assets/i1.JPG"
import i2 from "../assets/i2.JPG"
import i3 from "../assets/i3.JPG"
import i4 from "../assets/i4.JPG"

function Badge() {
  return (
    <div id='badge-container'>
        <div id="badge-left">
                <h1>WTF Fitness Experience?</h1>
                <div id="badge-left-bottom">
                    <div id="bar"></div>
                    <div id="bar-text">
                        @ your regular gym cost?
                    </div>
                </div>
        </div>
        <div id="badge-right">
            <div id="cards">
                <div className="card">
                    <img src={i1} alt="" />
                    <p>Modern Equipments</p>
                </div>
                <div className="card">
                    <img src={i2} alt="" />
                    <p>Skilled Trainers</p>
                </div>
                <div className="card">
                    <img src={i3} alt="" />
                    <p>Top Class Ambience</p>
                </div>
                <div className="card">
                    <img src={i4} alt="" />
                    <p>Sanitized GYMS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Badge