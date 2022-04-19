import { CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'

export default function Posts() {
    const posts = useSelector(state => state.posts.posts);
    // console.log(posts)
    return (
        !posts.length ? <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5vh 0" }}>
            <CircularProgress />
        </Box> : (
            <Grid container spacing={4}>
                {posts.map(post => (
                    <Grid key={post._id} item xs={12} md={6} lg={4}>
                        <Post data={post} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}
