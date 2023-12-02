import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_SEARCH, START_LOADING, END_LOADING} from '../constants/actionTypes';

export default (state = { isLoading: true, blogs: []}, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        
        case END_LOADING:
            return { ...state, isLoading: false };
            
        case FETCH_ALL:
            return {
                ...state,
                blogs: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages
            };

        case FETCH_BY_SEARCH:
            return {
                ...state,
                blogs: action.payload,
            };

        case CREATE:
            return {...state, blogs: [...state.blogs, action.payload]};

        case UPDATE:
            return { ...state, blogs: state.blogs.map((blog) => (blog._id === action.payload._id ? action.payload : blog)) };

        case DELETE:
            return { ...state, blogs: state.blogs.filter((blog) => blog._id !== action.payload)};

        default:
            return state;
    }
};