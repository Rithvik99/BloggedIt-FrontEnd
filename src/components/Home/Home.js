import React, {useState, useEffect} from 'react';
import {Container, Grow, Grid, Paper, AppBar, TextField, Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';


import Blogs from '../Blogs/Blogs';
import Form from '../Form/Form';
import useStyles from './styles';
import Pagination from '../Pagination/Pagination';
import {getBlogs, getBlogBySearch} from '../../actions/blogs';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const [displayForm, setDisplayForm] = useState(false);

    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    const searchBlogs = () => {
        if(search.trim() || tags) {
            dispatch(getBlogBySearch({search, tags: tags.join(',')}));
            history.push(`/blogs/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            history.push('/');
        }
    }

    const handleAddBlogClick = () => {
        setDisplayForm(true);
    };
    // const handleSubmitClick = () => {
    //     setDisplayForm(false);
    // };
    // const hanleKeyPress = (e) => {
    //     if(e.keyCode === 13) {
    //         searchBlogs();
    //     }
    // }

    const handleAdd = (tag) => setTags([...tags, tag]);
    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={3} className={classes.gridContainer}>
                <Grid item xs={12} sm={6} md={9}>
                    <Blogs setCurrentId={setCurrentId} setDisplayForm={setDisplayForm}/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    {!displayForm && ( 
                        <Paper elevation={6} className={classes.addButtonContainer}>
                            <Button variant="contained" color="primary" className={classes.addButton} onClick={handleAddBlogClick}>
                            Add Blog
                            </Button>
                        </Paper>
                    )}
                    {displayForm && ( 
                        <Paper elevation={6} className={classes.formContainer}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} setDisplayForm={setDisplayForm} />
                        </Paper>
                    )}
                
                    {/* <Form currentId={currentId} setCurrentId={setCurrentId}/> */}
                    {(!searchQuery && !tags.length) && (
                        <Paper elevation={6} className={classes.pagination}>
                            <Pagination page={page}/>
                        </Paper>
                    )}
                </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
