import './App.css';
import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
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
    <React.Fragment>
      <NavigationBar/>
      <Header/>
    </React.Fragment> 
  );
}

export default App;
