import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material'
import moment from "moment"
import { useDispatch } from "react-redux"
import { Delete, ThumbUpAlt } from "@mui/icons-material"
import SettingsIcon from '@mui/icons-material/Settings';
import PostSlice, { DeletePostAction, LikePostAction } from '../../store/post-slice'
export default function Post({ data }) {
    const dispatch = useDispatch()

    return (
        <Card sx={{ display: 'flex', color: 'white', marginTop: "1vh", background: 'transparent', position: 'relative', border: "1px solid white", flexDirection: 'column', justifyContent: 'space-between', borderRadius: '5px', height: '100%' }}>
            <CardMedia
                sx={{ height: 0, paddingTop: '56.25%', backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundBlendMode: 'darken' }}
                title={data.title}
                image={data.selectedFiles}
            />
            <Box sx={{ position: 'absolute', top: '10px', left: '20px', color: 'white' }}>
                <Typography sx={{ color: "white" }} variant='h6'>{data.creator}</Typography>
                <Typography sx={{ color: "white" }} variant='body2'>{moment(data.createdAt).fromNow()}</Typography>
            </Box>
            <Box sx={{ position: 'absolute', top: '20px', right: '20px', color: '#fff' }}>
                <Button sx={{ color: "white" }} size='small' onClick={() => {
                    dispatch(PostSlice.actions.setSelectedPost(data._id))
                }}>
                    <SettingsIcon sx={{ color: "white" }} fontSize='small' />
                </Button>
            </Box>
            <CardContent>
                <Typography sx={{ padding: '0', color: "#fe4237" }} variant='h5' >{data.title}</Typography>
                <Typography sx={{ padding: '0' }} variant='body2' gutterBottom>{data.message}</Typography>
                <Box>
                    {data.tags.map(tag => <Chip key={tag} sx={{ color: "#fe4237" }} size="small" variant="outlined" label={tag} />)}
                </Box>
            </CardContent>
            <CardActions sx={{ padding: '0 16px 8px 16px', display: 'flex', justifyContent: 'space-between' }}>
                <Button sx={{ color: "white" }} size='small' onClick={() => {
                    dispatch(LikePostAction(data._id))
                }}>
                    <ThumbUpAlt sx={{ color: "white", marginRight: "0.5vw" }} fontSize='small' />
                    Like, {data.likeCount}
                </Button>
                <Button size='small' onClick={() => {
                    dispatch(DeletePostAction(data._id))
                }}>
                    <Delete sx={{ marginRight: "0.3vw" }} fontSize='small' />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}
