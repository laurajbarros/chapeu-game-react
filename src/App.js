import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data:''
    }
  }
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  };
}

export default App;
