import React from 'react';
import Search from '../common/Search';
import { Card, CardActionArea, CardContent, CardMedia, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HomePage = ({ country, currentShows, themeDark, updateCountry }) => {

    return (
        <React.Fragment>
        <div className="hero">
            <Typography variant="h2" component="h1" sx={{ marginTop: 0, marginBottom: 5, textAlign: 'center' }}>Search for a TV show</Typography>
            <Search themeDark={themeDark} />
        </div>
        <div className="container">
            <div className="country-selector-container">
                <Typography variant="h5" component="h2" sx={{ marginTop: 3, marginBottom: 3, marginRight: 2 }}>Showing today in</Typography>
                <FormControl>
                    <InputLabel id="country-select">Country</InputLabel>
                    <Select
                        labelId="country-select"
                        id="demo-simple-select"
                        value={country}
                        label="Country"
                        onChange={updateCountry}
                    >
                        <MenuItem value={'US'}>America</MenuItem>
                        <MenuItem value={'CA'}>Canada</MenuItem>
                        <MenuItem value={'IN'}>India</MenuItem>
                        <MenuItem value={'JP'}>Japan</MenuItem>
                        <MenuItem value={'KR'}>Korea</MenuItem>
                        <MenuItem value={'GB'}>United Kingdom</MenuItem>
                    </Select>
                </FormControl>
            </div>
            {currentShows.length > 0 ? <div className="card-container">
                {currentShows.map(tvShow => (
                    <Link to={`shows/${tvShow.show.id}`}>
                    <Card sx={{ margin:'auto', maxWidth:210 }} className="card">
                        <CardActionArea >
                            <CardMedia
                                component="img"
                                alt={tvShow.show.name}
                                height="295"
                                image={ tvShow.show.image.medium }></CardMedia>
                            <CardContent sx={{ padding:0 }}>
                                <div className="card-content-main">
                                    <Typography variant="h5" >{ tvShow.show.name }</Typography>
                                    {tvShow.show.summary && <Typography className="card-content-summary" variant="body2" >{ tvShow.show.summary.replace(/(<([^>]+)>)/gi, "") }</Typography>}
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>))}
            </div> : `Sorry, we don't have any tv shows listed today.`}
        </div>
        </React.Fragment>
    );
}

export default HomePage;
