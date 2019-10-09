import React from 'react';
import './MochooButton.css'

const mochooBottun = (props) => {
  return (
    <section>
        <button className='glow-on-hover' onClick={props.click}>MoChooe</button>
    </section>
  )
};

export default mochooBottun;