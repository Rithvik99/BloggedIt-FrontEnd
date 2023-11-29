import axios from 'axios';

const url = 'http://localhost:5000/blogs';

export const fetchBlogs = () => axios.get(url); // fetch blogs from backend
export const createBlog = (newBlog) => axios.post(url, newBlog); // create blog in backend
export const updateBlog = (id, updatedBlog) => axios.patch(`${url}/${id}`, updatedBlog); // update blog in backend
export const deleteBlog = (id) => axios.delete(`${url}/${id}`); // delete blog in backend
export const likeBlog = (id) => axios.patch(`${url}/${id}/likeBlog`); // like blog in backend