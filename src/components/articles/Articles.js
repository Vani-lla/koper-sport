import React, { Component } from 'react';
import './Articles.css';
import axios from 'axios';

const api = axios.create({
   baseURL: 'http://www.kopernik.netus.pl/'
});

export default class Articles extends Component {
   constructor(props) {
      super(props);
      this.state = {
         loading: true,
         data: null,
         articleCount: 5,
      };

      this.getData();
   }

   componentDidMount() {
      window.addEventListener('scroll', () => {
         this.setState({ articleCount: this.state.articleCount+0.06 });
      })
   }

   async getData() {
      let data = (await api.get('/Api/artykul.php')).data;
      this.setState({ data: data });
      this.setState({ loading: false });
      console.log(this.state.data);
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
               <img src={`http://kopernik.netus.pl/podstrony/page${(parseInt(id)+200).toString()}/glow.jpg`} alt="article image" id={`article-img-${id}`}
                  onError={console.log(`article-img-${id}`)}
               />
               <div className="article-content-p" dangerouslySetInnerHTML={{ __html: content }} />
            </div>

         </div>
      )
   }

   render() {
      if (!this.state.loading) {
         return (
            <div className="articles">
               {this.state.data.map((art, ind) => {
                  if (ind < this.state.articleCount) {
                     return this.article(art.tytul, art.id, art.tresc, art.data);
                  } else { return }
               })}
            </div>
         )
      }
      return <div>Loading</div>
   }
}
