import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Input from './components/input.js'
import Main from './components/main.js'
class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <Input />

        <Main />
      </div>
    );
    }
  }
export default App;
