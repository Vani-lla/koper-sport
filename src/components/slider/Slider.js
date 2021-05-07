import React, { Component, Fragment } from 'react';
import './Slider.css';

import k1 from '../../static/slider/k1.jpg';
import k2 from '../../static/slider/k2.jpg';

import l1 from '../../static/slider/l1.jpg';
import l2 from '../../static/slider/l2.jpg';

import n1 from '../../static/slider/n1.jpg';
import n2 from '../../static/slider/n2.jpg';

import p1 from '../../static/slider/p1.jpg';
import p2 from '../../static/slider/p2.jpg';

import s1 from '../../static/slider/s1.jpg';
import s2 from '../../static/slider/s2.jpg';

import z1 from '../../static/slider/z1.jpg';
import z2 from '../../static/slider/z2.jpg';

import data from '../../static/slider.json';

export default class Slider extends Component {
   constructor(props) {
      super(props);
      this.state = {
         images: [k1, k2, l1, l2, n1, n2, p1, p2, s1, s2, z1, z2],
         activeTxt: 0,
         activeImg: 0
      };

      let interval = 5000;

      setInterval(() => { this.activeTxtCycle() }, interval);
      setInterval(() => { this.activeImgCycle() }, interval/2);
   }

   componentDidMount()   {document.getElementById('ak').className = "nav-sub active"}
   componentWillUnmount(){document.getElementById('ak').className = "nav-sub"}

   activeTxtCycle() {
      if (this.state.activeTxt < this.state.images.length/2-1) {
         this.setState({ activeTxt: this.state.activeTxt+1 })
      } else {
         this.setState({ activeTxt: 0 })
      }
   }

   activeImgCycle() {
      if (this.state.activeImg < this.state.images.length-1) {
         this.setState({ activeImg: this.state.activeImg+1 })
      } else {
         this.setState({ activeImg: 0 })
      }
   }

   title() {
      return (
         <div id="slider-titles">
            {data.sporty.map((sport, ind) => {
               if (this.state.activeTxt === ind) { return <h1 className="slider-title slider-active" key={ind}> {sport} </h1> }
               else { return <h1 className="slider-title slider-inactive" key={ind}> {sport} </h1> }
            })}
         </div>
      )
   }

   images() {
      return (
         <div id="slider-images">
            {this.state.images.map((image, ind) => {
               if (this.state.activeImg === ind) {return <img key={ind} alt="slider-image" src={image} className="slider-image slider-active"/> }
               else {return <img key={ind} alt="slider-image" src={image} className="slider-image slider-inactive"/> }
            })}
         </div>
      )
   }

   text() {
      return (
         <div id="slider-text">
            {data.sporty.map((sport, ind) => {
               if (this.state.activeTxt === ind) {return <div className="slider-text slider-active" key={ind}> {data[`${sport}`]} </div> }
               else {return <div className="slider-text slider-inactive" key={ind}> {data[`${sport}`]} </div> }
            })}
         </div>
      )
   }

   render() {
      return (
         <div className="slider">
            {this.title()}
            {this.images()}
            {this.text()}
         </div>
      )
   }
}