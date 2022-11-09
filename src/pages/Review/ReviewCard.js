import React from 'react';
import { Avatar, Divider, Grid, Paper } from "@mui/material";

const ReviewCard = ({comment}) => {
  
  const {commentSingle,name}=comment
    return (
        <div >
      <h1 >Comments</h1>
      <Paper className='my-5' style={{ padding: "20px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src="" />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{name}</h4>
            <p style={{ textAlign: "left" }}>
             {commentSingle}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted 1 minute ago
            </p>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" style={{ margin: "5px 5px" }} />
        
      </Paper>
    </div>
    );
};

export default ReviewCard;