// components/Navbar.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import BookIcon from "../assets/book.png"
import "./navstyle.css"


const StyledAppBar = styled(AppBar)({
  backgroundColor: '#ff7043',
});

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  backgroundColor: '#fff',
  color: '#ff7043',
  '&:hover': {
    backgroundColor: '#ffe0b2',
  },
}));

const Title = styled(Typography)({
  flexGrow: 1,
});

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  // Toggle the drawer open/close
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          {/* Hamburger Icon for small screens */}
          <StyledIconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }} // Show only on small screens
          >
            <MenuIcon />
          </StyledIconButton>

          <Title variant="h6" className='flex gap-2'>
          <img src={BookIcon} alt="Book Icon"  className='w-7 '/>
            Recipe Finder
          </Title>

          {/* Desktop View Buttons */}
          <div className="desktop-nav " style={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
            <StyledButton color="inherit" component={Link} to="/">
              Home
            </StyledButton>
            <StyledButton color="inherit"  component={Link} to="/about">
              About
            </StyledButton>
            <StyledButton color="inherit" component={Link} to="/feedback">
              Feedback
            </StyledButton>
          </div>
        </Toolbar>
      </StyledAppBar>

      {/* Drawer for Mobile View */}
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/feedback" onClick={toggleDrawer(false)}>
            <ListItemText primary="Feedback" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
