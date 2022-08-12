import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../CSS/Home.css';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="barra">
          <IconButton
            size="large"
            edge="start"
            color= "inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon className="barra"/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FitSys
          </Typography>
          <Button color="inherit">Voltar</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
