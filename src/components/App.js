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
    const [themeDark, setThemeDark] = useState(true);
    const [country, setcountry] = useState('GB');

    const updateCountry = (e) => {
        setcountry(e.target.value);
    }

    const darkTheme = createTheme({
        palette: {
            mode: themeDark ? 'dark' : 'light',
        },
    });

    useEffect(() => {
        // Get current shows for about page.
        fetch(`https://api.tvmaze.com/schedule/?country=${country}`)
        .then(res => res.json())
        .then(data => setCurrentShows(data.filter(tvShow => tvShow.show.image)));
    }, [country]);

    const toggleTheme = () => setThemeDark(!themeDark);

    return (
        <div className={`app ${darkTheme.palette.mode}`}>
            <ThemeProvider theme={darkTheme}>
                <Header toggleTheme={toggleTheme} />
                <Routes>
                    <Route exact path="/" element={ <HomePage country={country} currentShows={currentShows} themeDark={themeDark} updateCountry={updateCountry} /> }></Route>
                    <Route path="shows/:id" element={ <ShowContainer showInfo={showInfo} /> }></Route>
                    <Route path="cast-member/:id" element={ <CastMember /> }></Route>
                    <Route path="*" element={ <ErrorPage /> }></Route>
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;