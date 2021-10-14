import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const Suppliers  = (props) => {
  const {suppliers} = props;
  
  const allSuppliers= suppliers.map((supplier) => {
    return(
        <TableRow key={supplier._id}>
            
            <TableCell align="left">{supplier.CompanyName}</TableCell>
            <TableCell align="left">{supplier.ContactName}</TableCell>
            <TableCell align="left">{supplier.Address}</TableCell>
            <TableCell align="left">{supplier.Country}</TableCell>
        </TableRow>
        )
})
    return(
      <>
        <Container sx= {{ padding: "20px 5px" }} >
            <Container maxWidth="large">
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Our delicious restaurants
              </Typography>
            </Container>
        </Container>
        <div >
        <TableContainer component={Paper} sx = {{maxWidth: 1000, margin: 'auto'}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="left">Company Name</TableCell>
                    <TableCell align="left">Contact Name</TableCell>
                    <TableCell align="left">Address</TableCell>
                    <TableCell align="left">Country</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {allSuppliers}
                </TableBody>
            </Table>
        </TableContainer>            
        </div>
      </>
    )
}

export default Suppliers;