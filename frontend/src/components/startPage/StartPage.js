import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useStyles from "./stylesStartPage";
import {Button} from "@mui/material";
import { NavLink } from "react-router-dom";

const StartPage = () => {
  const classes = useStyles();


  return (
    <>
      {/* Main start */}
      <Container className={classes.container}>
        <Container maxWidth="large">
        <Typography
            variant="h1"
            align="center"
            color="textPrimary"
            padding="50px"
          >
            DELIVERY SERVICE
          </Typography>
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            padding="50px"

          >
            Fastest in town
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSeconadry"
            padding="50px"
            paragraph
          >
           At yours door in a few minutes.
          </Typography>
        </Container>
      </Container>
      {/* Main start */}
      <Container align="center" className={classes.buttons}>
        <Button variant="contained" sx={{ fontSize: "20px" }}>
          <NavLink to="products" className={classes.navLink}>Order</NavLink>
        </Button>
      </Container>
      {/* Card start */}
      {/* Card end */}
    </>
  );
};

export default StartPage;
