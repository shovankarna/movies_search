import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

import About from './components/About';
import MovieHome from './components/MovieHome';
import TvShow from './components/TvShow';
import Anime from './components/Anime';


class App extends React.Component {

  state = {
    isOpen: false,
  }

  toggle = (event) => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div className="App">
        <Sidebar isOpen={this.state.isOpen} toggle={this.toggle} />
        <Navbar toggle={this.toggle} />
        <Switch>
          {/* <Route exact path='/' render={(props) => <MovieHome {...props} />} /> */}
          <Route exact path='/movie' render={(props) => <MovieHome {...props} />} />
          <Route exact path='/tvshow' render={(props) => <TvShow {...props} />} />
          <Route exact path='/anime' render={(props) => <Anime {...props} />} />
          <Route exact path='/about' render={(props) => <About {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
