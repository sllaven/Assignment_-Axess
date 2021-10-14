import React from "react";
import { Link, NavLink } from 'react-router-dom';
import MenuItem from "@mui/material/MenuItem";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CssBaseline  from '@mui/material/CssBaseline';
import AppBar  from '@mui/material/AppBar';
import Toolbar  from '@mui/material/Toolbar';
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useStyles from './stylesHeader';
import Badge from '@mui/material/Badge';



const Header= (props) => {
    
  const {cartNum} = props;
    const classes = useStyles();

    return(
        <>
            <CssBaseline />
        <AppBar position = 'relative'>
          <Toolbar>
            <Typography variant="h5" sx= {{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
              <Link to="/" className={classes.brandName}>Axess</Link>
            </Typography>
            <Box sx={{ p: 1, marginLeft:"auto"}}>
              <Box sx= {{display: 'flex'}}>
                <MenuItem>
                  <NavLink to="/" exact className={classes.navLink}>Home</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="products" className={classes.navLink}>Products</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="suppliers" className={classes.navLink}>Suppliers</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="orders" className={classes.navLink}>Orders</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="shop" className={classes.navLinkIcon}>
                    <Badge badgeContent={cartNum} color="warning">
                      <AddShoppingCartIcon fontSize="inherit" color="" style={{ fontSize: "30px" }} />
                    </Badge>
                  </NavLink>
                </MenuItem>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>  
        </>
    )
}



export default Header;