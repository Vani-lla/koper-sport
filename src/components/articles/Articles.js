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

      // this.getText(1000215);
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

   article(title, id) {
      return (
         <div key={id} className="article">
            <h1>{title}</h1>
            <div className="article-content">
               <img src={`http://kopernik.netus.pl/podstrony/page${id}/glow.jpg`} alt="ID, które otrzymuję w requeście nie zgadza się z ID tych artykułów. To dlatego większości zdjęć nie ma, a reszta się nie zgadza. Tak samo jest z tytułami, których nie ma w ogóle. Do tych plików tekstowych nie mogę się dostać, bo headery blokują fetch'a"/>
               <p>
                  Aliquam sit amet orci tellus. Nunc suscipit sodales facilisis. Cras nibh est, tristique a porttitor consequat, cursus quis magna. Curabitur id lorem ac nisl congue auctor vel sed dolor. Vestibulum vel lacinia sem, nec ornare odio. Sed malesuada varius tortor et viverra. Cras nec posuere justo, ut rutrum odio. Vestibulum quis gravida metus. Curabitur sit amet felis lectus.
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
                  return this.article(art.tytul, art.id);
               })}
            </div>
         )
      }
      return <div>Loading</div>
   }
}
