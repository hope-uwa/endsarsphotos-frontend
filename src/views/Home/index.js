import {Container, Grid, Typography} from '@material-ui/core';
import SortAndSearch from 'components/SortAndSearch';
import ImageCard from 'components/ImageCard';
import React from 'react';
import {Hero} from 'components/Hero';


const Home = () => {
  return (
    <div>
      <Hero />
      <Container>
       <SortAndSearch />
        <Typography>
          Gallery
        </Typography>
        <Grid container spacing={3}>
          {['', '', '', '', ''].map (imagePost => (
            <Grid item xs={12} sm={3} >
              <ImageCard />
            </Grid>
          ))}
        </Grid>
      </Container>

    </div>
  );
};

export default Home;
