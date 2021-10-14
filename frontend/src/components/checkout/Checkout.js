  
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom'



const theme = createTheme();

export default function Checkout(props) {
  const {cartItem, removeItem, removeAllItems} = props;

  const total = cartItem.reduce((a,c) => a + c.UnitPrice * c.qty, 0)
  
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          marginBottom: "100px"
        }}
      >
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <React.Fragment>
            
            {/* Review */}
            <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItem.map((product) => (
          <ListItem  key={product._id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.ProductName} secondary={product.UnitPrice }/>
            <Typography variant="body2">{product.qty} </Typography>
            <Typography variant="subtitle1">  x {product.UnitPrice} $</Typography>
            <Button onClick = {(e) => {removeItem(product)}} variant="outlined" color="error" sx={{mr: 0, ml: 5}}><DeleteIcon/></Button>
          </ListItem>
        ))}
      </List>
      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
        {cartItem.length === 0 && "Cart is Empty"}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        </Grid>
      </Grid>
            {/* Review */}
            <React.Fragment >
      <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText />
            <Typography variant="body2"></Typography>
          </ListItem>
      <List disablePadding>
          <ListItem  sx={{ py: 1, px: 0 }}>
            <ListItemText  />
          </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${total}
          </Typography>
          <Button onClick={(e) => {removeAllItems()}} variant="outlined" color="error" sx={{mr: 0, ml: 5}}>Remove all</Button>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        </Grid>
      </Grid>
    </React.Fragment>
            {/* Review */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to="/address">
              <Button sx={{ mt: 3, ml: 1, }} variant="contained" textDecoration="none">
                Next
              </Button>
            </Link>
                </Box>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}