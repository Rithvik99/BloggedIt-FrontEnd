export default (blogs = [], action) => {
    switch (action.type) {
        case "DELETE":
            return blogs.filter((blog) => blog._id !== action.payload);
            
        case "FETCH_ALL":
            return action.payload;

        case "CREATE":
            return [...blogs, action.payload];

        case "UPDATE":
        case "LIKE":
            return blogs.map((blog) => (blog._id === action.payload._id ? action.payload : blog));

        default:
            return blogs;
    }
};