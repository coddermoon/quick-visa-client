
import { Button, Grid, Paper, TextField } from "@mui/material";
import React from "react";

const CommentBox = () => {
  return (
    <div  style={{ padding: 10 }} className="App">

       <h1> write a Review</h1>
     
      <Paper className="my-5" style={{ padding: "20px 20px" }}>
        
      <form >


      <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Comment"
                  name="comment"
                  autoComplete="email"
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
  );
};

export default CommentBox;
