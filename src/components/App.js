import '../App.css';
import Header from './common/Header';
import HomePage from './home/HomePage';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import React, { useState, useEffect } from 'react';
import ShowContainer from './shows/ShowContainer';
import { createTheme, ThemeProvider } from '@mui/material';
import CastMemberContainer from './cast-member/CastMemberContainer';

function App() {
    const [currentShows, setCurrentShows] = useState([]);
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
        // Use AbortController to abort the fetch and cleanup in return function to avoid memory leaks.
        const controller = new AbortController();
        fetch(`https://api.tvmaze.com/schedule/?country=${country}`, {signal: controller.signal})
        .then(res => res.json())
        .then(data => setCurrentShows(data.filter(tvShow => tvShow.show.image)))
        .catch(e => console.log(e));
        
        return () => controller.abort();
    }, [country]);

    const toggleTheme = () => setThemeDark(!themeDark);

    return (
        <div className={`app ${darkTheme.palette.mode}`}>
            <ThemeProvider theme={darkTheme}>
                <Header toggleTheme={toggleTheme} />
                <Routes>
                    <Route exact path="tv-shows" element={ <HomePage country={country} currentShows={currentShows} themeDark={themeDark} updateCountry={updateCountry} /> }></Route>
                    <Route path="tv-shows/shows/:id" element={ <ShowContainer /> }></Route>
                    <Route path="tv-shows/cast-member/:id" element={ <CastMemberContainer /> }></Route>
                    <Route path="*" element={ <ErrorPage /> }></Route>
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;