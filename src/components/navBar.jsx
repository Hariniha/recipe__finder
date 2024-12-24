// components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

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
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledIconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </StyledIconButton>
        <Title variant="h6">
          Recipe Finder
        </Title>
        <StyledButton color="inherit" component={Link} to="/">
          Home
        </StyledButton>
        <StyledButton color="inherit" component={Link} to="/about">
          About
        </StyledButton>
        <StyledButton color="inherit" component={Link} to="/recipes">
          Recipes
        </StyledButton>
        {/* Update Feedback button to use Link */}
        <StyledButton color="inherit" component={Link} to="/feedback">
          Feedback
        </StyledButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
