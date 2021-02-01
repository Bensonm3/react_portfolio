import React,  { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'



class App extends Component {
  render() {
    return (   
      <div class ="pageContainer">  
       <Navbar />
       <Footer />
       </div> 
    );
  }
}

export default App;
