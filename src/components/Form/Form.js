import React, {useState, useEffect} from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


import useStyles from './styles';
import { createBlog, updateBlog} from "../../actions/blogs";



const Form = ({ currentId, setCurrentId}) => {
    const [blogData, setBlogData] = useState({ 
        title: '', 
        message: '', 
        tags: '', 
        selectedFile: '' 
    });

    const user = JSON.parse(localStorage.getItem('profile'));

    const blog = useSelector((state) => currentId ? state.blogs.find((b) => b._id === currentId) : null);

    useEffect(() => {
        if(blog) setBlogData(blog);
    }, [blog]);

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateBlog(currentId, {...blogData, name: user?.result?.name}));
        } else{
            dispatch(createBlog({...blogData, name: user?.result?.name}));
        }

        clear();
    };

    if(!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your own blogs and like other's blogs.
                </Typography>
            </Paper>
        );
    }

    const clear = () => {
        setCurrentId(null);
        setBlogData({ 
            title: '', 
            message: '', 
            tags: '', 
            selectedFile: '' 
        });
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating' } a Blog</Typography>
                <TextField 
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth 
                    value={ blogData.title }
                    onChange={ (e) => setBlogData({ ...blogData, title: e.target.value }) }
                />
                <TextField 
                    name="message" 
                    variant="outlined" 
                    label="Message" 
                    fullWidth
                    value={ blogData.message }
                    onChange={ (e) => setBlogData({ ...blogData, message: e.target.value }) } 
                />
                <TextField 
                    name="tags" 
                    variant="outlined" 
                    label="Tags" 
                    fullWidth 
                    value={ blogData.tags }
                    onChange={ (e) => setBlogData({ ...blogData, tags: e.target.value.split(',') }) }
                />

                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={ ({base64}) => setBlogData({ ...blogData, selectedFile: base64 }) }
                    />
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default Form;