import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { useParams } from 'react-router'
import MetaTags from '../../Components/MetaTags'


const RenderBlog = () =>{
    const {canonical} = useParams()
    const [data, setData] = useState()

    return(
        <Grid container>
            <MetaTags/>
        </Grid>
    )
}

/*
data={
    ....,
    filters:{
        milage:""
    }
}
*/