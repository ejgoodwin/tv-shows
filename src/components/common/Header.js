import Brightness4Icon from '@mui/icons-material/Brightness4';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import logo from '../../images/logo.svg';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MaterialLink } from '@mui/material';
import { IconButton } from '@mui/material';

const Header = ({ toggleTheme }) => {
    return (
        <div className="header">
            <div className="container header__container">
                <MaterialLink component={RouterLink} to="/">
                    <img src={logo} alt="" />
                </MaterialLink>
                <span className='header__home-link'>
                    <MaterialLink component={RouterLink} to="/">
                        <IconButton variant="text" color="secondary">
                            <HomeIcon />
                        </IconButton>
                    </MaterialLink>
                </span>
                <IconButton onClick={() => toggleTheme()} variant="text" color="secondary">
                    <Brightness4Icon />
                </IconButton>
            </div>
        </div>
    ); 
}

export default Header;
