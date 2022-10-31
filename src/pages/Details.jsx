import React from 'react'
import Slider from '../components/Slider';
import Memberships from '../components/Memberships';
import GymDetails from '../components/GymDetails';
import Footer from '../components/Footer';
import "../components/Styles/GymDetails.css"
import BuyNowBadge from '../components/BuyNowBadge';

function Details() {
  return (
    <>
        <Slider/>
        <div id='details-section'>
          <GymDetails/>
          <Memberships/>
        </div>
        <BuyNowBadge/>
        <Footer/>
    </>
  )
}

export default Details