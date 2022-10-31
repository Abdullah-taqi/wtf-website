import { React, useState, useEffect } from "react";
import "./Styles/GymList.css";
import "./Styles/Style.css";
import { FaSearch, FaMapMarkerAlt, FaStar, FaStarHalf, FaLocationArrow } from "react-icons/fa";
import Axios from "axios";
import logo from "../assets/logo.png"
import {Link as Lnk} from 'react-router-dom'


function GymList() {
  const [jobsList, setJobsList] = useState([]);
  const [filteredData,setFilteredData] = useState(jobsList);
  
  const handleSearch = (event) => {
    let value = event.target.value;
    let result = [];
    
    console.log(value.toLowerCase());
    result = jobsList.filter((data) => {
        console.log(data.gym_name.toLowerCase());
    return data.gym_name.toLowerCase().search(value) !== -1;
    
    });
    setFilteredData(result);
    }
  useEffect(() => {
    Axios.get('https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231')
    .then(response => {
    console.log(response.data.data);
    setJobsList(response.data.data);
    setFilteredData(response.data.data);
    })
    .catch(error => {
    console.log('Error getting fake data: ' + error);
    })
    }, []);

  return (
    <div>
        <div id="search-bar">
      <div id="search-icon">
        <FaSearch
          color="white"
        />
      </div>
      <div id="search-field">
        <input type="" placeholder="Search gym name here" onChange={(event) =>handleSearch(event)}/>
      </div>
      <div id="search-location">
        <FaMapMarkerAlt 
            color="white"
            size="20px"   
        />
      </div>
      <div id="search-btn">Clear</div>
    </div>
      <div className="gyms-container">
        <div className="gym-filter">
            <div id="inner-filters">
            <div id="inner">
            <h3>Filters</h3>
            <h5>Location</h5>
            <div id="location-filter" className="inputfield-location">
                <FaSearch color="white"/>
                <input type="text" placeholder="Enter location"/>
            </div>
            <h5>Price</h5>
            <div id="price-filter" >
                <input type="number" placeholder="Min" className="inputfield-price"/>
                <input type="number" placeholder="Max" className="inputfield-price"/>
            </div>
            <h5>Cities</h5>
            <div id="cities-filter">
                    <select name="cars" id="cities">
                    <option value="All">All</option>
                    <option value="New Delhi">New Delhi</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Greater Noida">Greater Noida</option>
                    <option value="Noida">Noida</option>
                    <option value="Ghaziabad">Ghaziabad</option>
                    </select>
            </div>
            </div>
            </div>
        </div>
        <div className="gyms-cards-container">
          <div className="job-profiles">
            {filteredData.map((value, i) => (
              <div>
                <div key={i}>
                  <div className="gyms-card">
                    <div className="discount-tag">
                      20% off
                    </div>
                    <div className="free-tag">Free</div>
                    <div id="gym-img">
                      <img src={logo} alt="Gym"/>
                    </div>
                    <div className="card-description">
                      <div id="top-desc">
                      <div id="title-status">
                        <h3 id="gyms-card-title">{value.gym_name}</h3>
                      </div>
                      <div id="ratings">
                        <FaStar color="white"/>
                        <FaStar color="white"/>
                        <FaStar color="white"/>
                        <FaStar color="white"/>
                        <FaStarHalf color="white"/>
                      </div>
                      <p id="skills-required">
                        <b>Address : </b>
                        {value.address1}
                      </p>
                      <p className="description">
                        <FaLocationArrow color="green"/> {value.distance_text} | {value.duration_text} 
                      </p>
                      </div>
                      <div id="bottom-desc">
                        <p>Rs. 4999 for 3 months</p>
                        <button><Lnk to="/gym-details/naresh-sir-gym">BOOK NOW</Lnk></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GymList;
