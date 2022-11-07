import { Avatar, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Assets/contexts/AuthProvider';


const Login = () => {
  const {loginWithEmail}= useContext(AuthContext)
 

const handleLogin = (e)=>{
  e.preventDefault()
  const form = e.target
 
  const email = form.email.value
  const password = form.password.value

  loginWithEmail(email,password)
  .then(result=>{
    console.log(result)
  })
  .catch(err=>{
    console.error(err.message)
  })
}

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
           
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                
              <div className='text-center'>
              <NavLink  to='/signup'variant="body2">
                  New User? Sign up now
                </NavLink>
              </div>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    );
};

export default Login;