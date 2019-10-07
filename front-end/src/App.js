import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.scss';
import MochooButton from './components/MochooButton/MochooeButton'

class App extends Component {

  clicked = () => {
    console.log('Clicked!');
  };

  render() {
    return (
        <div className="App">
          <h1>MoChooe</h1>
          <MochooButton/>
          <button className='btn third'> MoChooe!</button>
        </div>
    )
  }
}

export default App;
