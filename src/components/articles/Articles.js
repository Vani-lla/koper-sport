import React, { Component, Fragment } from 'react';
import './Articles.css';
import './ArticleImages.css';
import axios from 'axios';
import { useState } from 'react';

const api = axios.create({
   baseURL: 'https://www.koper.edu.pl/'
});

export default class Articles extends Component {
   constructor(props) {
      super(props);
      this.state = {
         loading: true,
         data: null,
         articleCount: 5,
         images: {},
         toggle_id: 0,
         toggle_active: false,
         curr_img: 0
      };
      
      this.img_number = 0;
      this.easter = 0;

      this.getData();

      this.images = [];

      this.rightBtn = this.rightBtn.bind(this);
      this.leftBtn = this.leftBtn.bind(this);
   }

   componentDidMount() {
      document.getElementById('ak').className = "nav-sub-active";

      window.addEventListener('scroll', () => {
         this.setState({ articleCount: this.state.articleCount+0.06 });
      })
      window.addEventListener('keydown', (event) => {
         if (event.key === "Escape"){
            this.setState({toggle_id: 0, toggle_active: false, curr_img: 0})
         }
      })
   }

   async getData() {
      let data = (await api.get('/Api/artykul.php')).data;
      this.setState({ data: data });
      // console.log(this.state.data);

      this.state.data.map((article, ind) => {
         this.imagesAdd(article.id);
      })

      this.setState({ loading: false });
   }

   dateConvert(date) {
      let d = date.split(' ');

      if (Math.floor(d[1]) === 1) {
         d[1] = 'stycznia'
      } else if (Math.floor(d[1]) === 2 ) {
         d[1] = 'lutego'
      } else if (Math.floor(d[1]) === 3 ) {
         d[1] = 'marca'
      } else if (Math.floor(d[1]) === 4 ) {
         d[1] = 'kwietnia'
      } else if (Math.floor(d[1]) === 5 ) {
         d[1] = 'maja'
      } else if (Math.floor(d[1]) === 6 ) {
         d[1] = 'czerwca'
      } else if (Math.floor(d[1]) === 7 ) {
         d[1] = 'lipca'
      } else if (Math.floor(d[1]) === 8 ) {
         d[1] = 'sierpnia'
      } else if (Math.floor(d[1]) === 9 ) {
         d[1] = 'września'
      } else if (Math.floor(d[1]) === 10) {
         d[1] = 'października'
      } else if (Math.floor(d[1]) === 11) {
         d[1] = 'listopada'
      } else if (Math.floor(d[1]) === 12) {
         d[1] = 'grudnia'
      }

      d[2] = Math.floor(d[2]);

      return `${d[2]} ${d[1]} ${d[0]}`;
   }

   article(title, id, content, date) {
      return (
         <div key={id} className="article">
         
            <div className="article-upper">
               <h1 className="article-title">{title}</h1>
               <div className="article-date"> {this.dateConvert(date.split(' ')[0].replace('-', ' ').replace('-', ' '))} </div>
            </div>

            <div className="article-content">
               <img src={`http://koper.edu.pl/podstrony/page${(parseInt(id)+200).toString()}/glow.jpg`} alt="article image" id={`article-img-${id}`}
                  onClick={() => {this.setState({toggle_active: true, toggle_id: id})}} />
               <div className="article-content-p" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
         </div>
      )
   }

   imagesAdd(id) {
      let l = [`http://koper.edu.pl/podstrony/page${(parseInt(id)+200).toString()}/glow.jpg`];
      for (let i = 0; i < 7; i++) {
         let tester = new Image();
         tester.src = `http://koper.edu.pl/podstrony/page${(parseInt(id)+200).toString()}/${i}.jpg`;
         tester.onload  = () => {
            l.push(`http://koper.edu.pl/podstrony/page${(parseInt(id)+200).toString()}/${i}.jpg`)
         }
      }
      
      this.state.images[`images-${id}`] = l;
      l.reverse();
      return l
   }

   rightBtn() {
      if (this.state.curr_img < this.img_number) {
         this.setState({ curr_img: this.state.curr_img + 1 });
      }
      else {
         this.setState({ curr_img: 0 });
      }
      // console.log(this.state.curr_img);
   }

   leftBtn() {
      if (this.state.curr_img > 0) {
         this.setState({ curr_img: this.state.curr_img - 1 });
      }
      else {
         this.setState({ curr_img: this.img_number });
      }
      // console.log(this.state.curr_img);
   }

   render() {
      if (this.state.toggle_active) {
         document.body.style.overflow = 'hidden';
      } else {document.body.style.overflow = 'auto';}
      if (!this.state.loading) {
         return (
            <Fragment>
            {this.state.articleCount < 5.5 ?
               <div className="credits">
                  <div>Projekt i wykonanie:</div>
                  <div className="easter" onClick={() => {this.easter += 1; if (this.easter === 5) {window.alert(`man, try harder\n${this.easter}/69`)} else {console.warn(`w8, ${this.easter}/69`)}; if (this.easter === 69){window.location.replace("https://youtu.be/dQw4w9WgXcQ?t=43");}}}>Igor Kowalczyk</div>
               </div>
               : this.state.articleCount < 6.8 ?
               <div className="credits inactive">
                  <div>Projekt i wykonanie:</div>
                  <div className="easter">Igor Kowalczyk</div>
               </div>
               :
               <Fragment></Fragment>
            }

            {this.state.toggle_active &&
               <Fragment>               
                  <button className="sub-btn" id="close-btn" onClick={() => {this.setState({toggle_active: false, toggle_id: 0, curr_img: 0})}}>X</button>

                  <div className="dom-img">
                     {this.state.data.map((art, ind) => {
                           if (this.state.toggle_id == art.id) {this.img_number = this.state.images[`images-${art.id}`].length-1; return (
                              <Fragment>
                                 {this.img_number != 0 && 
                                    <Fragment>
                                       <button className="sub-btn" id="right-btn" onClick={this.rightBtn}>→</button>
                                       <button className="sub-btn" id="left-btn"  onClick={this.leftBtn}>←</button>
                                    </Fragment>
                                 }              
                              
                                 <div key={ind} className="sub-images active-imgs">
                                    {this.state.images[`images-${art.id}`].map((img, ind) => { 
                                       if (this.state.curr_img == ind) {
                                          return <img key={ind} src={img} className="sub-img sub-active"/>
                                       } else {
                                          return <img key={ind} src={img} className="sub-img sub-passive"/>
                                       }
                                    })}
                              </div>
                              </Fragment>
                           )}
                     })} 
                  </div>
               </Fragment>
            }
           
            <div className="articles">
               {this.state.data.map((art, ind) => {
                  if (ind < this.state.articleCount) {
                     return this.article(art.tytul, art.id, art.tresc, art.data);
                  } else { return }
               })}
            </div>
            </Fragment>

         )
      }
      return (
         <div className="credits">
            <div>Projekt i wykonanie:</div>
            <div className="easter">Igor Kowalczyk</div>
         </div>
      )       
   }
}
