import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import './App.css'

import LoginForm from './pages/login-form-demo'
import MenuDemo from './pages/menu-demo'
import LiveRegionDemo from './pages/live-region-demo'
import CardFlipDemo from './pages/card-flip-demo'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              <NavLink to="/">Component Library</NavLink>
            </h1>
            <ul className="Component-list">
              <li><NavLink 
                  to="/login-form"
                  >Login Form</NavLink> <span></span></li>
                <li><NavLink 
                  to="/card-flip"
                  >Card Flip</NavLink> <span></span></li>
              <li><NavLink 
                  to="/live-region"
                  >Live Region</NavLink> <span></span></li>
              <li><NavLink 
                  to="/menu"
                  >Menu</NavLink> <span></span></li>
            </ul>
          </header>
          <div className="main">
            <Route path="/login-form" component={LoginForm}/>
            <Route path="/menu" component={MenuDemo}/>
            <Route path="/live-region" component={LiveRegionDemo}/>
            <Route path="/card-flip" component={CardFlipDemo}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App