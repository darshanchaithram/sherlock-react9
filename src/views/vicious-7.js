import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard1 from '../components/feature-card1'
import './vicious-7.css'

const Vicious7 = (props) => {
  return (
    <div className="vicious7-container">
      <Helmet>
        <title>Vicious-7 - OnConf template1</title>
        <meta property="og:title" content="Vicious-7 - OnConf template1" />
      </Helmet>
      <div className="vicious7-hero">
        <h1 className="vicious7-text">THE VICIOUS 7</h1>
        <button className="vicious7-button button">Get Started</button>
      </div>
      <div className="vicious7-features">
        <div className="vicious7-container1">
          <FeatureCard1 rootClassName="rootClassName"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName1"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName2"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName3"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName7"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName6"></FeatureCard1>
          <Link to="/challenge-1">
            <FeatureCard1
              rootClassName="rootClassName5"
              className="vicious7-component6"
            ></FeatureCard1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Vicious7
