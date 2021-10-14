import makeStyles  from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    container: {
      width:"100%",
      backgroundColor: "paper",
      padding: "50px 5px"
    },
    buttons: {
      paddingBottom:"50px"
    },
    cadGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: "flex",
        flexDirection:'column'
    },
    cardContent: {
        flexGrow:1,
    },
    cardMedia: {
      paddingTop: '56.25%'
  },
  navLink: {
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "20px",
    color:"white",  
},
  }));

export default useStyles;