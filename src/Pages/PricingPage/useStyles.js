import { makeStyles } from "@material-ui/core";
import { Colors } from "../../Theme/color.constants";
const { mercury , DoveGray} = Colors;

const useStyles = makeStyles(() => ({
    wrapper: {
        backgroundColor: mercury,
        padding: "6% 0"
    },
    text:{
        color:DoveGray
    }

}));

export default useStyles;
