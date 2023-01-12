import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = [{ title: 'About', url: '#about' }, { title: 'Porfolio', url: '#portfolio' }, { title: 'Social Media', url: '#contact' }];

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="App">
      <AppBar position="static" sx={{bgcolor: 'white'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, md: 'flex' }}>
              <a href="/">
                <img src="mylogo3.png" alt="AH logo" width="60px" sx={{
                  display: { xs: 'block', md: 'none' }
                }} />
              </a>
            </Typography>
          
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                href={page.url}
                sx={{ my: 2, color: '#23395d', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }} >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="text">
        <div id="about">
          <h1>Hi! I'm Annie!</h1>
          <p>I'm a software developer!</p>
        </div>
          
        <div className="background" id="portfolio">
          <p>hi</p>
        </div>

        <div id="contact">
          <h1>Contact Info</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
