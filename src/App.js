import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import { Navbar } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class App extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <NavigationBar/>
        <Header/>
      </React.Fragment>
    );
  }
}
 
export default App;
