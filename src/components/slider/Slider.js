import React, { Component } from 'react';
import img1 from '../../static/slider/1.jpg';
import img2 from '../../static/slider/2.jpg';
import img3 from '../../static/slider/3.jpg';
import img4 from '../../static/slider/4.jpg';
import img5 from '../../static/slider/5.jpg';
import img6 from '../../static/slider/6.jpg';
import img7 from '../../static/slider/7.jpg';
import img8 from '../../static/slider/8.jpg';
import img9 from '../../static/slider/9.jpg';
import './Slider.css';

export default class Slider extends Component {
   constructor(props) {
      super(props);

      this.state = {
         y: -100,
         animation: true,
         images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img1],
      };
      
      setInterval(() => {
         this.slide()
      }, 7000);
   }
   
   slide() {
      this.setState({ animation: true })
      this.setState({ y: this.state.y - 100 })
      if (this.state.y === (this.state.images.length-1)*-100) {
         setTimeout(() => {
            this.setState({ y: 0, animation: false })
         }, 7000);
      }
   }

   render() {
      return (
         <div className="slider">
            {this.state.images.map((image, index) => {
               return (
                  <img className={this.state.animation ? 'image animated' : 'image '} style={{transform: `translateY(${this.state.y}%)`}} src={image} key={index}/>
               )
            })}
         </div>
      )
   }
}