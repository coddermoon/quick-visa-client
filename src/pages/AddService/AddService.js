import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';

const AddService = () => {

    const handleSubmit=(e)=>{
        e.preventDefault()
        const form = e.target
        
    }

    return (
        <Container>
            <h1 className="text-center my-5">Add A New Service</h1>
            <Container className='my-5'>
       
      <Grid>
        <Card >
          <CardContent>
            <Typography gutterBottom variant="h5">
              Add A new Service
          </Typography> 
           
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Title" label="title" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="price" label="price" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="text" placeholder="Enter image url" label="Image Url" variant="outlined" fullWidth required />
                </Grid>
               
                <Grid item xs={12}>
                  <TextField label="description" multiline rows={4} placeholder="Type your Description here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      </Container>
        </Container>
    );
};

export default AddService;