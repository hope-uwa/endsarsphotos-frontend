import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {Box} from '@material-ui/core';
import Home from './views/Home';
import Header from 'components/Header';
import {Footer} from 'components/Footer';
import AddForm from 'views/AddForm';
const Routes = () => {
  return (
    <div>

      <Router>
        <Header />
        <Box maxWidth={1440} margin='auto'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-photos" component={AddForm} />
          </Switch>
         
        </Box>
        
      </Router>
      <Footer />
    </div>
  );
};

export default Routes;
