import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Posts: []
};

export const postSlice = createSlice({
  initialState,
  name: "postSlice",
  reducers: {
    addPost: (state, action) => {
      state.Posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.Posts = state.Posts.filter(
        (post) => post.postId !== action.payload
      );
    },
    editPost: (state, action) => {
      const { postId, storyDescription } = action.payload;
      const postToUpdate = state.Posts.find((post) => post.postId === postId);
      if (postToUpdate) {
        postToUpdate.storyDescription = storyDescription;
      }
    },
    addComment: (state, action) => {
      const { postId, response } = action.payload;
      const post = state.Posts.find((post) => post.postId === postId);
      if (post) {
        post.comments.push(action.payload);
      }
    },
    addLikes: (state, action) => {
      const { postId, setLike } = action.payload;
      const post = state.Posts.find((post) => post.postId === postId);
      if (post) {
        post.likes++;
      }
    }
  }
});
export const { editPost, addPost, deletePost, addComment, addLikes } =
  postSlice.actions;
export default postSlice.reducer;
