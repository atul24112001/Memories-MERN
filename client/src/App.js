import { Box, Grid, Grow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Form from './Components/Form/Form'
import Navbar from './Components/Navbar/Navbar'
import Posts from './Components/Posts/Posts'
import { GetPostAction } from './store/post-slice'


export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetPostAction());
    }, [dispatch])

    return (
        <Box sx={{ height: "100vh", backgroundColor: "black", padding: "1vh 1vw", color: "white", overflowY: "scroll" }}>
            <Navbar />
            <Grow in>
                <Grid container sx={{ padding: { xs: "2vh 2vw", md: "0" }, flexDirection: { xs: 'column-reverse', md: "row" } }} spacing={4}>
                    <Grid item xs={12} md={8}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Grow>
        </Box>
    )
}
