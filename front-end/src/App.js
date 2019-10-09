import React, {Component} from 'react';
import './App.css';
import MochooButton from './components/MochooButton/MochooBotton';
import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';
import Filter from './components/Filter/Filter';
import config from './config/config';

// import axios from 'axios';

class App extends Component {

      getMovie = () => {
        console.log(process.env.REACT_APP_ENV_TEST);
        console.log(config.envTest)
        // axios.get(`{config.backEndHost}:{config.backEndPort}`)
      };

    render() {
      return (
          <div className='App'>
            <Header/>
            <p>{config.envTest}</p>
            <MochooButton
                click={() => {this.getMovie()}}
                />
            <Movie/>
            <Filter/>
            <footer/>
          </div>
      )
    }
};

export default App;
