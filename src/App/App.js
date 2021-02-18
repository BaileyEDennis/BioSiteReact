import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Routes from '../Helpers/routes';
import NavBar from '../Components/NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <Router>
          <NavBar />
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
