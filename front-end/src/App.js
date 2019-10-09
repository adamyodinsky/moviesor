import React, {Component} from 'react';
import './App.css';
import MochooButton from './components/MochooButton/MochooBotton';
import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';
import Filter from './components/Filter/Filter';
import config from './config/config';
import axios from 'axios';

class App extends Component {

      getMovie = async () => {
        const uri = `http://${config.backEndHost}:${config.backEndPort}/${config.backEndApi}/health`;
        console.log(uri);
        try {
          const response = await axios.get(uri);
          console.log(response);
        } catch (e) {
          console.log(e.message);
        }

      };

    render() {
      return (
          <div className='App'>
            <Header/>
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
