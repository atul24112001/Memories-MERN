import React, { useEffect, useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux'
import PostSlice, { AddPostsAction, UpdatePostAction } from "../../store/post-slice"

const defaultData = { message: "", creator: "", tags: "", title: "", selectedFiles: "" };

export default function Form() {
    const [postData, setPostData] = useState(defaultData)
    const dispatch = useDispatch();
    const selectedPost = useSelector(state => state.posts.selectedPost);

    useEffect(() => {
        if (selectedPost) {
            setPostData(selectedPost)
        }
    }, [selectedPost])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (selectedPost) {
            dispatch(UpdatePostAction(postData._id, postData))
        } else {
            dispatch(AddPostsAction(postData));
        }
        clear();
    }

    const clear = () => {
        setPostData(defaultData);
        dispatch(PostSlice.actions.setSelectedPost(null));
    }

    const styles = {
        marginBottom: "2vh",
        '& .MuiOutlinedInput-input': {
            // color: "#fe4237",
            color: "white",
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: "white",
            // borderColor: "#c7493a",
            // color: "#fe4237"
        },
        '& .MuiInputLabel-root': {
            color: "white",
            // color: "#c7493a",
        }
    }

    return (
        <Box sx={{ padding: "2vh 1vw", border: "1px solid #fff", borderRadius: "5px" }}>
            <Typography align='center' variant='h5' gutterBottom>{selectedPost ? "Editing a Post" : "Creating a post"}</Typography>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <TextField sx={styles} placeholder='Creator' label='Creator' variant="outlined" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField sx={styles} placeholder='Title' label='Title' variant="outlined" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField sx={styles} placeholder='Message' label='Message' variant="outlined" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField sx={styles} placeholder='Tags' label='Tags' variant="outlined" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <Box sx={{ backgroundColor: "green" }}>
                    <FileBase64 type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFiles: base64 })} />
                </Box>
                <Button sx={{ color: 'black', marginTop: "2vh" }} type='submit' color='secondary' variant='contained' fullWidth>Submit</Button>
                <Button sx={{ color: 'black', marginTop: "2vh" }} size='small' type='button' color='warning' onClick={clear} variant='contained' fullWidth>Clear</Button>
            </form>
        </Box>
    )
}
