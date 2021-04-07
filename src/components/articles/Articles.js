import React, { Component } from 'react';
import './Articles.css';
import axios from 'axios';

const api = axios.create({
   baseURL: 'http://kopernik.netus.pl'
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
      data = data.filter((article) => {
         return article.kategoria === 'sport';
      })
      this.setState({ data: data });
      this.setState({ loading: false });
      console.log(this.state.data);
   }

   async getText(id) {
      fetch(`http://kopernik.netus.pl/podstrony/page${id}/dane.txt`).then(x => console.log(x.text()))
   }

   article(title, id, content) {
      return (
         <div key={id} className="article">
            <h1>{title}</h1>
            <div className="article-content">
               <img src={`http://kopernik.netus.pl/podstrony/page${(parseInt(id)+200).toString()}/glow.jpg`} alt="article image"/>
               <p>
                  {content}
               </p>
            </div>

         </div>
      )
   }

   render() {
      if (!this.state.loading) {
         return (
            <div className="articles">
               {this.state.data.map((art) => {
                  return this.article(art.tytul, art.id, art.tresc);
               })}
            </div>
         )
      }
      return <div>Loading</div>
   }
}
