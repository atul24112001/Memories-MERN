import { createSlice } from "@reduxjs/toolkit";
import { createPost, deletePost, fetchPosts, likePost, updatePost } from "../api";

const initialState = { posts: [], selectedPost: null }

const PostSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        allPosts: (state, actions) => {
            state.posts = actions.payload
            // console.log(state.posts);
        },
        setSelectedPost: (state, actions) => {
            state.selectedPost = state.posts.find(post => post._id === actions.payload)
        }
    }
})

export const GetPostAction = () => {
    return async dispatch => {
        const data = await fetchPosts();
        dispatch(PostSlice.actions.allPosts(data.data));
    }
}

export const AddPostsAction = (newPost) => {
    return async dispatch => {
        await createPost(newPost);
        await dispatch(GetPostAction());
    }
}

export const UpdatePostAction = (id, data) => {
    return async dispatch => {

        await updatePost(id, data)
        await dispatch(GetPostAction());
    }
}

export const DeletePostAction = id => {
    return async dispatch => {
        await deletePost(id);
        await dispatch(GetPostAction());
    }
}

export const LikePostAction = id => {
    return async dispatch => {
        await likePost(id);
        await dispatch(GetPostAction());
    }
}
export default PostSlice;