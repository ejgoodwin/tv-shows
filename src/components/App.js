import '../App.css';
import Header from './common/Header';
import HomePage from './home/HomePage';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import React, { useState, useEffect } from 'react';
import ShowContainer from './shows/ShowContainer';
import { createTheme, ThemeProvider } from '@mui/material';
import CastMember from './cast-member/CastMember';

function App() {
    const [currentShows, setCurrentShows] = useState([]);
    const [showInfo, setShowInfo] = useState('');

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    useEffect(() => {
        // Get current shows for about page.
        fetch('https://api.tvmaze.com/schedule?country=GB')
        .then(res => res.json())
        .then(data => setCurrentShows(data));
    }, []);

    const handleShowClick = (id) => setShowInfo(currentShows.filter(show => show.id === id)[0]);

    return (
        <div className={`app ${darkTheme.palette.mode}`}>
            <ThemeProvider theme={darkTheme}>
                <Header />
                <Routes>
                    <Route exact path="/" element={ <HomePage currentShows={currentShows} showClick={handleShowClick}/> }></Route>
                    <Route path="shows/:id" element={ <ShowContainer showInfo={showInfo} /> }></Route>
                    <Route path="cast-member/:id" element={ <CastMember /> }></Route>
                    <Route path="*" element={ <ErrorPage /> }></Route>
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;