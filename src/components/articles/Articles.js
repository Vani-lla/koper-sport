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
         data: null
      };
      this.getData();
   }

   async getData() {
      let data = (await api.get('/Api/artykul.php')).data;
      this.setState({ data: data });
      this.setState({ loading: false });
      console.log(this.state.data);
   }

   htmlTags(text) {
      return text.replace( /(<([^>]+)>)/ig, '');
   }

   dateConvert(date) {
      let d = date.split(' ');

      if (Math.floor(d[1]) === 1) {
         d[1] = 'Stycznia'
      } else if (Math.floor(d[1]) === 2 ) {
         d[1] = 'Lutego'
      } else if (Math.floor(d[1]) === 3 ) {
         d[1] = 'Marca'
      } else if (Math.floor(d[1]) === 4 ) {
         d[1] = 'Kwietnia'
      } else if (Math.floor(d[1]) === 5 ) {
         d[1] = 'Maja'
      } else if (Math.floor(d[1]) === 6 ) {
         d[1] = 'Czerwca'
      } else if (Math.floor(d[1]) === 7 ) {
         d[1] = 'Lipca'
      } else if (Math.floor(d[1]) === 8 ) {
         d[1] = 'Sierpnia'
      } else if (Math.floor(d[1]) === 9 ) {
         d[1] = 'Września'
      } else if (Math.floor(d[1]) === 10) {
         d[1] = 'Października'
      } else if (Math.floor(d[1]) === 11) {
         d[1] = 'Listopada'
      } else if (Math.floor(d[1]) === 12) {
         d[1] = 'Grudnia'
      }

      d[2] = Math.floor(d[2])

      return `${d[2]} ${d[1]} ${d[0]}`

   }

   article(title, id, content, date) {
      return (
         <div key={id} className="article">
            <h1>{title}</h1>
            <div className="article-content">
               <img src={`http://kopernik.netus.pl/podstrony/page${(parseInt(id)+200).toString()}/glow.jpg`} alt="article image"/>
               <div className="article-content-p" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <div className="article-date">
               {this.dateConvert(date.split(' ')[0].replace('-', ' ').replace('-', ' '))}
            </div>
         </div>
      )
   }

   render() {
      if (!this.state.loading) {
         return (
            <div className="articles">
               {this.state.data.map((art) => {
                  return this.article(art.tytul, art.id, art.tresc, art.data);
               })}
            </div>
         )
      }
      return <div>Loading</div>
   }
}
