import React from 'react'

import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery} from "@material-ui/core";


 
 const Sizes = () => {
    const theme = useTheme()
        
    const desktop = useMediaQuery(theme.breakpoints.up("lg"));
    const tablet = useMediaQuery(theme.breakpoints.only("md"));
    const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
    const mobile = useMediaQuery(theme.breakpoints.only("xs"));
       return {desktop,tablet,mobile, isMatch}
  };

  export default Sizes
