import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MaterialLink } from '@mui/material';

const Header = () => {
    return <div className="container"><MaterialLink component={RouterLink} to="/">TV Shows</MaterialLink></div>
}

export default Header;
