import React, {useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';


import blogged from './images/img.jpg';

import {getBlogs} from './actions/blogs';
import Blogs from './components/Blogs/Blogs';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getBlogs() );
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">BloggedIt</Typography>
        <img className={classes.image} src={blogged} alt="BloggedIt" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Blogs setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>

  );
};

export default App;
