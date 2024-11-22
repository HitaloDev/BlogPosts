import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Posts } from '@/types/Posts';

interface PostsState {
  posts: Posts[];
}

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Posts[]>) {
      state.posts = action.payload;
    },
    addPost(state, action: PayloadAction<Posts>) {
      state.posts.unshift(action.payload);
    },
  },
});

export const { setPosts, addPost } = postsSlice.actions;
export default postsSlice.reducer;
