import '../App.css';
import Header from './common/Header';
import HomePage from './home/HomePage';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import React, { useState, useEffect } from 'react';
import ShowInfo from './shows/ShowInfo';

function App() {
    const [currentShows, setCurrentShows] = useState([]);
    const [showInfo, setShowInfo] = useState('');

    useEffect(() => {
        // Get current shows for about page.
        fetch('https://api.tvmaze.com/schedule?country=GB')
        .then(res => res.json())
        .then(data => setCurrentShows(data));
    }, []);

    const handleShowClick = (id) => setShowInfo(currentShows.filter(show => show.id === id)[0]);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path="/" element={ <HomePage currentShows={currentShows} showClick={handleShowClick}/> }></Route>
                <Route path="shows/:id" element={ <ShowInfo showInfo={showInfo} /> }></Route>
                <Route path="*" element={ <ErrorPage /> }></Route>
            </Routes>
        </div>
    );
}

export default App;