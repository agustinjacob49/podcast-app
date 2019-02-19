import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeContainer from './components/HomeContainer';
import PodcastInfoContainer from './components/PodcastInfoContainer';
import './App.css';


class App extends Component {


  render() {
    return (
     <Router>
       <div>
         <Route path ="/" exact={true} component={HomeContainer}  ></Route>
         <Route path="/podcast/:id" exact={true} component={PodcastInfoContainer}></Route>
       </div>
     </Router>
    );
  }
}

export default App;
