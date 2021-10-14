import makeStyles  from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: "paper",
      padding: "20px 5px"
    },
    brandName: {
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "30px",
        color:"white",
    },
    navLink: {
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "20px",
        color:"white",  
    },
    navLinkIcon: {
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "20px",
        color:"white",  
    },
    footer: {

    },
    copyRight: {
      position:"static",
      bottom: "0"
    }
  }));

export default useStyles;