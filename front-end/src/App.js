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
        console.log(process.env.APP_HOST);
        console.log((config.appPort))
        console.log(config.appHost)
        // axios.get(`{config.backEndHost}:{config.backEndPort}`)
      };

    render() {
      return (
          <div className='App'>
            <Header/>
            <p>{config.appHost}</p>
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
