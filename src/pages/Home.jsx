import React from 'react';
import {Box, Grid, Paper, Typography} from "@mui/material";



const paperStyle = {

    display:'flex',
    justifyContent:'center',
    width: '60%',
    margin: 'auto',
    padding:'10%'
}
const img = {
    display: 'block',
    width: '20%',
    margin: 'auto'
}
const Home = () =>
    <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding={'10%'}
    >
        <Paper style={paperStyle}>
    <Typography variant={'h2'}> Access Tiers Demo App
    </Typography>
</Paper>
        <Grid container direction={"row"}>
            <img src="/ld-logo.png" alt="ai" style={img}/>
            <img src="/react-logo.png" alt="ai" style={img}/>
            <img src="/mui-logo.png" alt="ai" style={img}/>
        </Grid>
    </Grid>


export default Home;