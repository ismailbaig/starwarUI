import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Alltasks from './components/alltasks'

class App extends Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="logo">
        <div className="btn">        
          <Alltasks></Alltasks>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
