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


const Orders  = (props) => {
  const {orders} = props;
  
  const allOrders= orders.map((order) => {
    return(
        <TableRow key={order._id}>
            <TableCell align="left">{order.CustomerID}</TableCell>
            <TableCell align="left">{order.ShipAddress}</TableCell>
            <TableCell align="left">{order.ShipCity}</TableCell>
            <TableCell align="left">{order.OrderDate}</TableCell>
        </TableRow>
        )
})
    return(
      <>
        <Container sx= {{ padding: "20px 5px" }} >
            <Container maxWidth="sm">
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                History of orders
              </Typography>
            </Container>
        </Container>
        <div >
        <TableContainer component={Paper} sx = {{maxWidth: 1000, margin: 'auto'}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align="left">Last Name</TableCell>
                    <TableCell align="left">Adress</TableCell>
                    <TableCell align="left">City</TableCell>
                    <TableCell align="left">Time of order</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {allOrders}
                </TableBody>
            </Table>
        </TableContainer>            
        </div>
      </>
    )
}

export default Orders;