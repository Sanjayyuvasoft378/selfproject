import { Avatar, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Signuppage } from '../Redux/Action/UserAction';

export default function Signup() {
    const {register, handleSubmit, reset, formState:{errors}} = useForm();
    const dispatch = useDispatch();

    const Register = useSelector((state) => state.Reducer.create);
    const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: "#426a9e" }; 
    const SignupPage = (data) =>{
        const get_data = JSON.parse(localStorage.getItem('User_Info'))
        const isData = get_data.findIndex((item)=>{
            return item.email === data.email;

        }) !==-1;
        if (isData) {
            toast.error("this email is already exist")

        }
        else{
           dispatch(Signuppage()); 
        }
        reset();
    }

  return (
    <Grid>
        <Paper elevation={20} style = {paperStyle}>
            <Grid align="center">
                <Avatar style={avatarStyle}>
                </Avatar>
                <h2 style={headerStyle}>Sign Up</h2>
                <Typography variant="caption" gutterBottm>
                    Please fill this form to create an account here..!!!
                </Typography>
            </Grid>
            <form onSubmit={handleSubmit(SignupPage)}>
                <TextField fullWidth lable="Name" placeholder="Enter your Name"
                {...register("name", {required:true})} />
            </form>
        </Paper>
    </Grid>
  )
}
