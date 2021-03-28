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

export default class Slider extends Component {
   constructor(props) {
      super(props);
      this.state = {
         images: [k1, k2, l1, l2, n1, n2, p1, p2, s1, s2, z1, z2],
         active: 12,
      };

      setInterval(() => {
         if (this.state.active === 1) {
            this.setState({ active: this.state.images.length })
         } else {
            this.setState({ active: this.state.active - 1 })
         };
         // console.log(this.state.active);
      }, 3000);
   }

   componentDidMount() {
      document.getElementById('ak').className = "nav-sub active"
   }
   componentWillUnmount() {
      document.getElementById('ak').className = "nav-sub"
   }

   render() {
      return (
         <div className="slider">
            {this.state.images.map((image, index) => {
               return (
                  <img className={this.state.active >= index + 1 ? 'image' : 'image disactive'} src={image} key={index} />
               )
            })}
            {(this.state.active >= 11) ?
               <div className="description">
                  <h1>Sporty zimowe</h1>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a velit sodales, cursus mauris at, ornare velit. Donec sed ultrices enim, non rhoncus dolor. Sed congue nisl magna, sit amet faucibus magna volutpat sed. Nulla feugiat massa a tincidunt mattis. Nullam rhoncus consequat libero, non lobortis urna eleifend vel. Nulla porttitor sodales enim, a ornare purus. Quisque hendrerit dolor nisl, ut cursus sem semper vel. Praesent varius placerat tellus, ac cursus nibh.
                  </p>
               </div>
               : (this.state.active >= 9) ?
                  <div className="description">
                     <h1>Siatkówka</h1>
                     <p>
                        Aliquam erat volutpat. In hac habitasse platea dictumst. Donec fringilla purus in aliquet euismod. Integer venenatis ipsum vel auctor aliquam. Sed in nisi eu nulla dignissim fringilla vel quis massa. Sed laoreet elit ipsum, eu ornare risus condimentum imperdiet. Nulla facilisi. Fusce vitae nibh nibh. Morbi dolor mi, varius imperdiet ullamcorper ac, dictum vel lacus. Ut dapibus neque id lorem accumsan, id consectetur quam lobortis.
                     </p>
                  </div>
               : (this.state.active >= 7) ?
                  <div className="description">
                     <h1>Pływanie</h1>
                     <p>
                        Vivamus rhoncus elit nisl. Vivamus est ligula, aliquam ac orci non, volutpat venenatis mi. Sed malesuada, metus id sodales iaculis, nisi ligula sollicitudin risus, vitae ornare ex ante in tellus. Sed porta congue urna ultricies sodales. Nunc accumsan, massa non semper consequat, dui magna dictum nunc, eu congue metus purus quis erat. Donec enim augue, condimentum et fermentum eget, maximus sed lorem. Nunc porttitor urna eu odio condimentum, sed tempus ligula semper.
                     </p>
                  </div>
               : (this.state.active >= 5) ?
                  <div className="description">
                     <h1>Piłka nożna</h1>
                     <p>
                        Morbi vestibulum arcu a sagittis facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id elit eget est bibendum rhoncus non non orci. Proin vulputate, urna id vehicula tempus, turpis odio blandit dui, at tincidunt ipsum nunc non augue. Aenean rutrum hendrerit dolor, sit amet convallis ipsum posuere gravida. Ut semper elementum orci, ut tincidunt orci mollis nec. Nulla erat orci, bibendum ac venenatis eu, eleifend vehicula mi.
                     </p>
                  </div>
               : (this.state.active >= 3) ?
                  <div className="description">
                     <h1>Lekkoatletyka</h1>
                     <p>
                        Sed magna nunc, pellentesque id feugiat sit amet, eleifend vitae nisi. Phasellus et velit vel lectus ullamcorper ultrices. Quisque felis velit, porta a libero ut, egestas efficitur orci. Nunc vitae dolor non massa viverra posuere ac in lacus. Maecenas eu ornare magna. Quisque sed mi at nisi blandit pellentesque vel sed arcu. Donec lectus quam, pellentesque vitae rhoncus in, interdum quis arcu. Ut nisl eros, mollis a rhoncus eu, imperdiet id nunc.
                     </p>
                  </div>
               :
                  <div className="description">
                     <h1>Koszykówka</h1>
                     <p>
                        Phasellus nulla risus, lacinia vitae viverra vel, eleifend vel dolor. Vestibulum luctus massa ligula. Curabitur aliquet purus nec dictum suscipit. Proin mi metus, suscipit non ante aliquet, fermentum pretium metus. Phasellus eu magna ut libero congue convallis. Fusce id vehicula purus. Curabitur a sapien at augue suscipit eleifend et ac odio. Morbi iaculis efficitur commodo. Etiam pretium in sapien et bibendum. Sed rhoncus aliquam arcu at luctus.
                     </p>
                  </div>
               }
         </div>
      )
   }
}