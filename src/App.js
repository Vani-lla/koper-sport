import { Fragment } from 'react';
import './App.css';
import Slider from './components/slider/Slider';
import Navigation from './components/navigation/Navigation';
import Articles from './components/articles/Articles';
import Records from './components/records/Records';
import Archive from './components/archive/Archive';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
   return (
      <Fragment>
         <Navigation />
         <Router>
            <Switch>
               <Route path="/" exact>
                  <Slider />
                  <Articles />
               </Route>

               <Route path="/records" exact>
                  <Records />
               </Route>

               <Route path="/archive" exact>
                  <Archive />
               </Route>
            </Switch>
         </Router>
      </Fragment>
   );
}

export default App;