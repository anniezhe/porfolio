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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';


library.add(fas, far, fab)

const pages = [{ title: 'About', url: '#about' }, { title: 'Porfolio', url: '#portfolio' }];

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
      <AppBar position="static" sx={{ bgcolor: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, md: 'flex' }}>
              <a href="/">
                <img src="resizelogo.png" alt="AH logo" width="60px" className="img1" />
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

      <Box id="about" className="text" sx={{p: 15}}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, md: 'flex' }}>
          <h1>Annie He</h1>
          <div style={{ borderTop: "3px solid #380000 ", display: 'flex' }}></div>
          <p>I'm a software developer who has experience in creating and deploying web applications. I am in my final undergrad year
            studying Applied Math with Data Science concentration at CUNY John Jay. I am passionate about learning new technologies and finding ways to
            build a more positive and impactful tech solution that respect user privacy and security.
          </p>
        </Typography>
      </Box>

      <Box className="background" id="portfolio" sx={{ p: 15 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, md: 'flex' }}>
          <h1 className='text'>My Activites</h1>
          <div style={{ borderTop: "3px solid #380000 ", display: 'flex' }}></div>
        </Typography>
        <br></br>
        <Card>
          <Tabs
            defaultActiveKey="portfolioContent"
            // id="uncontrolled-tab-example"
            // className="mb-3"
            justify
          >
            <Tab eventKey="portfolioContent" title="Portfolio">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <img src="github.png" alt="Computer Science Club's github repository" className='tab' />
                  <p>
                  Two student executives at CSS Club and I created our school club's website. We used HTML/CSS, JavaScript, and Figma to make the website from scratch. 
                  To keep our github repository's issues clutter-free, we automate to delete any branches and tickets after they reach a certain amount of days of not being addressed or used.
                  We have reached out to a couple of people for assistance. All credits are listed in the github's "Contributors" section in the README document. </p>
                  <Button variant="contained" href="https://github.com/jjcss/CSS_Website" target="_blank" rel="noreferrer noopener">
                    Club's Github Repo
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Tab>
            <Tab eventKey="activities" title="Articles">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <img src='article.png' alt="My article webpage" className='tab' />
                  <p>
                    I wrote a letter to all job seekers. The letter is published on LinkedIn. Click on "LinkedIn Article" button. It will take you to the article. 
                  </p>
                  <Button variant="contained" href="https://www.linkedin.com/pulse/dear-people-who-looking-jobs-annie-he/" target="_blank" rel="noreferrer noopener" className="text">
                    LinkedIn Article
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Tab>
          </Tabs>
        </Card>
      </Box>

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        bgcolor: 'lightgray',
        p: 2
      }}>
        <Typography >
          <a href="/">
            <img src="resizelogo.png" alt="AH logo" width="40px" className="img1" />
          </a>
        </Typography>

        <Typography level="body3" sx={{ ml: 'auto' }}>
          <a href="anniezhe0@gmail.com">anniezhe0@gmail.com</a> | <a href="https://www.linkedin.com/in/anniezhe0" target="_blank" rel="noreferrer noopener"> <FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a>
        </Typography>

        <Typography level="body3" sx={{ ml: 'auto' }}>
          Copyright 2022
        </Typography>
      </Box>
    </div>
  );
}


export default App;
