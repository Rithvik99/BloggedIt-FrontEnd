import React from 'react';
import {Container} from '@material-ui/core';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {GoogleOAuthProvider} from '@react-oauth/google'

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import BlogDetails from './components/BlogDetails/BlogDetails';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));


  return (
    <GoogleOAuthProvider clientId='866479177555-ecp9rn6q9g9ago5tfeqjj6jghik8hfnj.apps.googleusercontent.com'>
      <BrowserRouter>
        <Container maxWidth="xl">
          <Navbar/>
          <Switch>
            <Route path="/" exact component={() => <Redirect to="/posts"/>}/>
            <Route path="/posts" exact component={Home}/> 
            <Route path="/posts/search" exact component={Home}/>
            <Route path="/posts/:id" component={BlogDetails}/>
            <Route path="/auth" exact component={() => (!user) ? <Auth/> : <Redirect to="/posts"/>}/>
          </Switch>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
