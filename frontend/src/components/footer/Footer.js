import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function Footer() {
    return (
      <Typography sx={{height:"50px"}} variant="body2" color="text.secondary" align="center" marginBottom="5px" marginTop="15px" >
        {'Copyright © '}
        <Link color="inherit" to="https://github.com/sllaven">
          Slaven Soldo
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }