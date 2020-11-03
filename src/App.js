import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import Connect from './components/Connect/Connect';
import {BrowserRouter, Route} from 'react-router-dom';

import TopBar from './components/TopBar/TopBar';
import AppNavBar from './components/AppNavBar/AppNavbar';
import Footer from  './components/Footer/Footer';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup'; 
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    
      <BrowserRouter>
      <div className="App">
      <TopBar/>
      <AppNavBar/>
      <Route exact path="/" component={Home}/>

      {/* Connect Component */}
      <Route path="/connect" component={Connect}/>

      <Route path="/cataloge" component={null} />
    
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
    </div>  
    <Footer />
      </BrowserRouter>
    
   
  );
}

export default App;
