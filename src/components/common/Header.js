import Brightness4Icon from '@mui/icons-material/Brightness4';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import logo from '../../images/logo.svg';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as MaterialLink } from '@mui/material';
import { IconButton } from '@mui/material';
import Search from './Search';

const Header = ({ toggleTheme }) => {
    return (
        <header className="header">
            <div className="container header__container">
                <MaterialLink component={RouterLink} to="/" sx={{ marginInlineEnd:'.5rem' }}>
                    <img src={logo} alt="" />
                </MaterialLink>

                {useLocation().pathname !== '/' && <Search />}

                <div className="header__icons">
                    <MaterialLink component={RouterLink} to="/">
                        <IconButton variant="text">
                            <HomeIcon style={{ color: 'var(--icon-header-color)' }} />
                        </IconButton>
                    </MaterialLink>
                    
                    <IconButton onClick={() => toggleTheme()} variant="text">
                        <Brightness4Icon style={{ color: 'var(--icon-header-color)' }} />
                    </IconButton>
                </div>
            </div>
        </header>
    ); 
}

export default Header;
