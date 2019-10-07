import React, { Component } from 'react';
import  classNames from 'classnames';
import logo from './logo.svg';
// import './styles.scss';
import './test.scss'
import MochooButton from './components/MochooButton/MochooeButton'

class App extends Component {
    state = {
      animated: false,
    };


  clicked = (event) => {
    this.setState({
      animated: true,
    });

    setTimeout(() => {
      this.setState({
        animated: false,
      });
      }, 1300
    );
  };

  render() {


    return (
        <div className="App">
          <a className={classNames('btn', {
            'btn--clicked': this.state.animated
          })} onClick={this.clicked}>MoChooe!</a>
          {
            ['blue', 'orange', 'green', 'white'].map((color) => (
                <span className={classNames('color', `color--${color}`, {
                  expanded: this.state.animated
                })} data-value="1" />
            ))
          }
        </div>
    )
  }
}

export default App;
