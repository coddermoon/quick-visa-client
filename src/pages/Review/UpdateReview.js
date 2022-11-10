import { Button, Grid, Paper, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import {  Container } from 'react-bootstrap';
import {useLoaderData} from 'react-router-dom'
import { AuthContext } from '../../Assets/contexts/AuthProvider';

const UpdateReview = () => {
    const [comment, setComment] = useState([]);
    const { user } = useContext(AuthContext);
    const data = useLoaderData()
    console.log(data)
    const handleComment = (e)=>{
        e.preventDefault();
        const commentSingle = e.target.comment.value;
        const ratings = e.target.ratings.value;
        const name = user?.displayName;
        const photo = user?.photoURL;
        const uid = user?.uid;
        const id = data._id
        
    
        const review = {
          commentSingle,
          name,
          uid,
          id,
          photo,
          ratings
        };
    }
    
    return (
        <Container>
           <div  style={{ padding: 10 }} className="App">

<h1> write a Review</h1>

<Paper className="my-5" style={{ padding: "20px 20px" }}>
 
<form  onSubmit={handleComment}>


<Grid item xs={12}>
<Grid item xs={12}>
           <TextField className="mb-5" label="Rating" type='number' name='ratings' min='1' max='5'  placeholder="give rating with 1 to 5 star"
           value={data.ratings}
           variant="outlined" fullWidth required />
         </Grid>
         <TextField
         value={data.commentSingle}
           required
           multiline rows={4}
           fullWidth
           id="text"
           label="Comment"
           name="comment"
           autoComplete="text"
           aria-label="minimum height"
         />
       </Grid>
       <Button
       type="submit"
       fullWidth
       variant="contained"
       sx={{ mt: 3, mb: 2 }}
     >
       Comment
     </Button>

</form>
</Paper>
</div>
        </Container>
    );
};

export default UpdateReview;