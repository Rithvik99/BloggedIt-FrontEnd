import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Action Creators
export const getBlogs = () => async (dispatch) => { 
    try {
        const { data } = await api.fetchBlogs(); // fetch the blogs from the backend
        dispatch({ type: FETCH_ALL, payload: data }); // dispatch the action to the reducer
    } catch (error) {
        console.log(error.message);
    }
}

export const getBlogBySearch = (searchQuery) => async (dispatch) => {
    try{
        const { data: { data } } = await api.fetchBlogsBySearch(searchQuery); // fetch the blogs from the backend
        console.log(data);
        // dispatch({ type: FETCH_ALL, payload: data }); // dispatch the action to the reducer
    } catch (error) {
        console.log(error);
    }
}

export const createBlog = (blog) => async (dispatch) => {
    try {
        const { data } = await api.createBlog(blog); // create the blog in the backend
        dispatch({ type: CREATE, payload: data }); // dispatch the action to the reducer
    } catch (error) {
        console.log(error.message);
    }
}

export const updateBlog = (id, blog) => async (dispatch) => {
    try {
        const { data } = await api.updateBlog(id, blog); // update the blog in the backend
        dispatch({ type: UPDATE, payload: data }); // dispatch the action to the reducer
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBlog = (id) => async (dispatch) => {
    try {
        await api.deleteBlog(id); // delete the blog in the backend
        dispatch({ type: DELETE, payload: id }); // dispatch the action to the reducer
    } catch (error) {
        console.log(error.message);
    }
}

export const likeBlog = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeBlog(id); // like the blog in the backend
        dispatch({ type: UPDATE, payload: data }); // dispatch the action to the reducer
    } catch (error) {
        console.log(error.message);
    }
}