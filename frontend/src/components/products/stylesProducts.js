import makeStyles  from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  container:{
      backgroundColor: "paper",
      padding: "20px 5px"
  },
  cardGrid: {
      padding: '20px 0'
  },
  card: {
      height: '100%',
      display: "flex",
      flexDirection:'column'
  },
  cardMedia: {
      paddingTop: '56.25%'
  },
  cardContent: {
      flexGrow:1,
  },
  price: {
    marginLeft:"0px", 
    marginRight:"auto",
    marginTop:"5px"
  },
  inputField: {
      width:"70px",
      marginLeft:"auto",
  }
  }));

export default useStyles;