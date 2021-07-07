import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    imageStyles: {
      textAlign:"center",
      margin:"auto",
      color:"red",
      background:"blue !important"
    },
  
    container:{
      background:"white", minHeight:"50vh", border:"1px solid black", width:"100%",
      '& > img':{
        textAlign:"center",
        background:"red",
        // display:'block',
        // margin:"auto",
      }
    }
  }));