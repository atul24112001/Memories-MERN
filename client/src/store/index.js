import { configureStore } from '@reduxjs/toolkit'
import PostSlice from './post-slice'

export const Store = configureStore({
    reducer: {
        posts: PostSlice.reducer,
    }
})