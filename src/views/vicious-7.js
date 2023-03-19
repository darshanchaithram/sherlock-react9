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
      </div>
      <div className="vicious7-features">
        <div className="vicious7-container1">
          <FeatureCard1
            rootClassName="rootClassName"
            image_src="/playground_assets/c1.jpg"
          ></FeatureCard1>
          <FeatureCard1
            rootClassName="rootClassName"
            image_src="/playground_assets/c2.jpg"
          ></FeatureCard1>
          <FeatureCard1
            rootClassName="rootClassName"
            image_src="/playground_assets/c3.jpg"
          ></FeatureCard1>
          <FeatureCard1
            rootClassName="rootClassName"
            image_src="/playground_assets/c4.jpg"
          ></FeatureCard1>
          <FeatureCard1
            rootClassName="rootClassName"
            image_src="/playground_assets/c5.jpg"
          ></FeatureCard1>
          <FeatureCard1
            rootClassName="rootClassName"
            image_src="/playground_assets/c6.jpg"
          ></FeatureCard1>
          
          <Link to="/challenge-1">
          <div class="card">
            <div class="content">
              <div class="back">
                <div class="back-content">
                  <strong>"Unveil the hidden!" </strong>
                </div>
              </div>
              <div class="front">
                
                <div class="img">
                  <div class="circle">
                  </div>
                  <div class="circle" id="right">
                  </div>
                  <div class="circle" id="bottom">
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Link>


        </div>
      </div>
      
      


    </div>
  )
}

export default Vicious7
