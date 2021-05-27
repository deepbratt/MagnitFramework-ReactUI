import { Grid } from '@material-ui/core'
import React from 'react'
import Main from './Main'
import error from "../../assets/Error/404.png"
function Errors() {
    return (
        <Grid xs={12}>
<Main ErrorImg={error} />
        </Grid>
    )
}

export default Errors
