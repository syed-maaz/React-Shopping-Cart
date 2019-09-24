import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'

import './styles/theme.scss'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route path="/cart" component={ Cart }/>
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
