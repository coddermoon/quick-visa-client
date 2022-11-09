import { Avatar, Button, Divider, Grid, Paper } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';

const UserReview = () => {
    return (
        <Container>
            <h1 className='text-center my-5'>Your Reviews</h1>

            <div >
     
     <Paper className='my-5' style={{ padding: "20px 20px" }}>
       <Grid container wrap="nowrap" spacing={2}>
         <Grid item>
           <Avatar alt="Remy Sharp" src=""  />
         </Grid>
         <Grid justifyContent="left" item xs zeroMinWidth>
           <h4 style={{ margin: 0, textAlign: "left" }}>name</h4>
           <p style={{ textAlign: "left" }}>
        commentSingle
           </p>
           <p style={{ textAlign: "left", color: "gray" }}>
             posted 1 minute ago
           </p>
         </Grid>
         <div className='me-5 d-flex flex-direction-column align-items-center' >
       <Button className='mx-2' variant="contained">delete  </Button>
<Button className='mx-2' variant="outlined">update</Button>
       </div >
       </Grid>
      
       <Divider variant="fullWidth" style={{ margin: "5px 5px" }} />
       
     </Paper>
   </div>




        </Container>
    );
};

export default UserReview;