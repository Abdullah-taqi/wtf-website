import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Badge from '../components/Badge';
import GymList from '../components/GymList';

function Home() {
  return (
    <>
        <Header/>
        <GymList/>
        <Badge/>
        <Footer/>
    </>
  )
}

export default Home