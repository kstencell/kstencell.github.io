import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {

  return (
    <React.Fragment className='App'>
      <NavigationBar/>
      <Header/>
      <Body/>
    </React.Fragment> 
  );
}

export default App;
