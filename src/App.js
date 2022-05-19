import './App.css';
import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Body from './components/Body';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
    AOS.refresh();
  }, []);

  return (
    <React.Fragment className='App'>
      <NavigationBar/>
      <Header/>
      <Body/>
    </React.Fragment> 
  );
}

export default App;
