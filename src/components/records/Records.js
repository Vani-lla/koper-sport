import React, { Component } from 'react'
import './Records.css';

export default class Records extends Component {
   constructor(props) {
      super(props);
      this.state = {
         active: Math.random() < 0.5
      };
   }

   render() {
      if (this.state.active) {
         return (
            <div className="records la">
               <h1 className="column-title">Chłopcy</h1>
               <h1 className="column-title btn" onClick={() => {this.setState({ active: !this.state.active })}}>Lekkoatletyka</h1>
               <h1 className="column-title">Dziewczyny</h1>

               <div className="record row-1">11,2s M.Walica 1988</div>
               <div className="category row-1">Bieg 100m</div>
               <div className="record row-1">12,21s A. Gaś 1990</div>

               <div className="record row-2">51,4s M.Werner 1977</div>
               <div className="category row-2">Bieg 400m</div>
               <div className="record row-2">57,62s Z.Legierska 2018</div>

               <div className="record row-1">1:55,60s M.Werner 1977</div>
               <div className="category row-1">Bieg 800m</div>
               <div className="record row-1">2:16,67s W.Mołdrzyk 2018</div>

               <div className="record row-2">3:59,20s M.Werner 1977</div>
               <div className="category row-2">Bieg 1500m</div>
               <div className="record row-2">4:47,48s W.Mołdrzyk 2018</div>

               <div className="record row-1">6,64m T.Rutkowski 1988</div>
               <div className="category row-1">Skok w dal</div>
               <div className="record row-1">5,87m I.Tymich 1988</div>

               <div className="record row-2">185cm M.Zawadzki 1997</div>
               <div className="category row-2">Skok wzwyż</div>
               <div className="record row-2">160cm J.Kawulok 1985</div>

               <div className="record row-1">13,71m B.Kulesza 1992</div>
               <div className="category row-1">Pchnięcie kulą</div>
               <div className="record row-1">11,30m A.Rańda 2017</div>

               <div className="record row-2">39,5m J.Kulesza 1970</div>
               <div className="category row-2">Rzut dyskiem</div>
               <div className="record row-2">27,36m G.Roman 1992</div>

               <div className="record row-1">56,68m J.Stanieczek 1978</div>
               <div className="category row-1">Rzut oszczepem</div>
               <div className="record row-1">32,34m M.Chrapek 1992</div>
            </div>
         )
      } else {
         return (
            <div className="records sw">
               <h1 className="column-title">Chłopcy</h1>
               <h1 className="column-title btn" onClick={() => {this.setState({ active: !this.state.active })}}>Pływanie</h1>
               <h1 className="column-title">Dziewczyny</h1>

               <div className="record row-1">25,15s M.Głowa 1996</div>
               <div className="category row-1">50m st.dowolnym </div>
               <div className="record row-1">30,09s M.Wilczek 2013</div>

               <div className="record row-2">35,50s G.Jakubowski 1995</div>
               <div className="category row-2">50m st.klasycznym</div>
               <div className="record row-2">42,50s J.Olszar 1996</div>

               <div className="record row-1">33,66s T.Wysocki 1996</div>
               <div className="category row-1">50m st.grzbietowym </div>
               <div className="record row-1">37,50s A.Szkawran 2000</div>

               <div className="record row-2">29,00s Łukasz Wroński 2010</div>
               <div className="category row-2">50m st.motylkowym</div>
               <div className="record row-2">36,69s A.Szkawran 2000</div>

               <div className="record row-1">58,07s M.Głowa 1996</div>
               <div className="category row-1">100m st.dowolnym</div>
               <div className="record row-1">1:05,19s M.Wilczek 2011</div>

               <div className="record row-2">1:17,81s G.Jakubowsk</div>
               <div className="category row-2">100m st.klasycznym</div>
               <div className="record row-2">1:32,78s J.Olszar 1996</div>

               <div className="record row-1">1:12,18s M.Głowa 1996</div>
               <div className="category row-1">100m st.grzbietowym</div>
               <div className="record row-1">1:22,31s A.Szkawran 2000</div>

               <div className="record row-2">2:31,74s M.Głowa 1996</div>
               <div className="category row-2">200m st.zmiennym</div>
               <div className="record row-2">3:02,47s J.Olszar 1996</div>

               <div className="record row-1">2:38,52s 1995 <br/> Janiczek, Chlebek, Jakubowski, Wysocki </div>
               <div className="category row-1">4*50 m st.klasycznym</div>
               <div className="record row-1">3:15,80s 1987 <br/> Scherle, Junga, Lipka, Zender </div>

               <div className="record row-2">1:49,75s 1996 <br/> Wysocki, Koszucki, Głowa, Wysocki</div>
               <div className="category row-2">4*50m st.dowolnym </div>
               <div className="record row-2">2:38,16s 1996 <br/> Olszar, Świś, Pustówka, Delong</div>
            </div>
         )
      }
   }
}
