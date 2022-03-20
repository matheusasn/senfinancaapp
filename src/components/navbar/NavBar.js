import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'


function NavBar(){
  return(
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" className={styles.navbar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img alt="logo" src={require('../../assets/logo/sensedata.png')} className={styles.img_social_midia}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div className={styles.item}>
                <NavLink className={({isActive}) => (isActive ? styles.active : '')} to='/'>
                  <h1 alt='SenFinaça'>SenFinança</h1>            
                </NavLink>
              </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;