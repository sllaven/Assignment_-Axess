import React from "react";
import useStyles from "./stylesProducts";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Box from "@mui/material/Box";



const Products = (props) => {

  const {Products, onAddItem} = props;
  const classes = useStyles();
  console.log(Products);
  const allProducts = Products.map((product) => {

  
    return (
      <Grid key={product._id} item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={product.imgUrl}
            title="Random image"
          />
          <CardContent className={classes.cardContent} sx={{paddingBottom:"0px"}}>
            <Typography gutterBottom variant="h5">
              {product.ProductName}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={(event)=>{onAddItem(product)}}
              variant="contained"
              size="medium"
              color="primary"
              sx={{paddingLeft:"2px", paddingRight:"2px"}}
            >
              ADD TO CART
            </Button>
            
            <Typography color="primary" marginRight="5px" marginLeft="80px" >
              {product.UnitPrice}
            </Typography>
            <Box className={classes.price}>
              <AttachMoneyIcon color="primary" fontSize="small" />
            </Box>
          </CardActions>
        </Card>
      </Grid>
      
    );
  });

  return (
    <>
      {/* Main start */}
      <Container className={classes.container}>
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            align="center"
            color="textPrimary"
            padding="40px"
          >
            Order delicious food
          </Typography>
        </Container>
      </Container>
      {/* Main start */}
      {/* Card start */}
      <Container className={classes.CardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {allProducts}
        </Grid>
      </Container>
    </>
  );
};

export default Products;
