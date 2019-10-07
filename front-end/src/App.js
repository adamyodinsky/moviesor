import React from 'react';
import './App.css';
import MochooButton from './components/MochooButton/MochooBotton';
import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';
import Filter from './components/Filter/Filter';

const App = () => {
    return (
        <div className='App'>
            <Header/>
            <MochooButton/>
            <Movie/>
            <Filter/>
            <footer/>
        </div>
    )
};

export default App;
