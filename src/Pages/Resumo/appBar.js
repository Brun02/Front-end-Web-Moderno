import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../CSS/Home.css';
import {useHistory} from 'react-router-dom';
import{useCallback} from 'react'

export default function ButtonAppBar() {
  const history = useHistory();
  const irParaHome = useCallback(() => history.push('/'), [history]);
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
            FitSys Resumo diário 
          </Typography>
          <Button color="inherit" onClick={irParaHome}>Voltar</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
