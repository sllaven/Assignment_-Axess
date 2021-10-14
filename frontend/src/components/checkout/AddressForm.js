  
import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider,TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';

const theme = createTheme();
function AddressForm(props) {

  const [newOrder, setNewOrder] = useState({_id: Math.floor(Math.random()* 100) ,CustomerID: "", ShipAddress:"", ShipCity:"", OrderDate:new Date().toLocaleDateString()});

  const {addNewOrderToState} = props;



  const addNewOrder = () => {
    addNewOrderToState(newOrder)
  }
  
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
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            
            id="CustomerID"
            name="CustomerID"
            label="First name"
            placeholder="CustomerID"
            onChange={(e) => {setNewOrder({...newOrder, CustomerID:e.target.value})}}
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            // onChange={(e) => {setNewOrder({...newOrder, lastName:e.target.value})}}
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="ShipAddress"
            name="ShipAddress"
            label="Address line 1"
            onChange={(e) => {setNewOrder({...newOrder, ShipAddress:e.target.value})}}
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ShipCity"
            name="ShipCity"
            label="City"
            onChange={(e) => {setNewOrder({...newOrder, ShipCity:e.target.value})}}
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="OrderDate"
            name="country"
            label="Country"
            // onChange={(e) => {setNewOrder({...newOrder, OrderDate:e.target.value})}}
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
      </Grid>
            {/* Review */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to="/shop">
              <Button sx={{ mt: 3, ml: 1, }} variant="outlined" textDecoration="none">
                Back
              </Button>
            </Link>
            <Link to="/address">
              <Button onClick={addNewOrder} sx={{ mt: 3, ml: 1, }} variant="contained" textDecoration="none">
                Order
              </Button>
            </Link>
            
                </Box>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default AddressForm;