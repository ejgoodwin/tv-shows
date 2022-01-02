import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, List, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material";
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const SearchContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'var(--search-background)',
    '&:hover': {
        backgroundColor: 'var(--search-background-hover)',
    },
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        width: '50%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: '8px 8px 8px 12px',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '.5',
}));

const Search = () => {
    const [searchItems, setsearchItems] = useState([]);
    const [searchValue, setsearchValue] = useState('');
    const [dropdownOpen, setdropdownOpen] = useState(false);
    const searchinputRef = useRef();

    const closeSearchDropdown = (e) => {
        const dropdownOpen = searchinputRef.current && searchinputRef.current.contains(e.target) ? true : false;
        setdropdownOpen(dropdownOpen);
        setsearchValue('');
    }

    useEffect(() => {
        // Use AbortController to abort the fetch and cleanup in return function to avoid memory leaks.
        const controller = new AbortController();
        fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`, {signal: controller.signal})
        .then(res => res.json())
        .then(data => setsearchItems(data))
        .catch(e => console.log('<Search>',e));

        return () => controller.abort();
    }, [searchValue]);

    useEffect(() => {
        document.addEventListener('click', closeSearchDropdown);
        return () => {
            document.removeEventListener('click', closeSearchDropdown);
        }
    }, []);

    return (
        <SearchContainer>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                ref={searchinputRef}
                onChange={(e) => setsearchValue(e.target.value)}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchValue}
            />
            <List sx={{ display: dropdownOpen ? 'block' : 'none', position:'absolute', width:'100%', zIndex:'2' }}>
                {searchItems.map(item => (
                    <ListItem key={item.show.id} disablePadding className='search-list-item'>
                        <Link to={`../tv-shows/shows/${item.show.id}`} className='search-dropdown-link'>
                            <ListItemButton>
                                <ListItemText primary={item.show.name} />
                            </ListItemButton>
                        </Link>
                    </ListItem>))}
            </List>
        </SearchContainer>
    );
}

export default Search;