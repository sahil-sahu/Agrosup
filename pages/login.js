import React, { useState } from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import styles from '../styles/Home.module.css';
import { NextSeo } from 'next-seo';
import Header from '../components/header';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function Home() {

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const theme = createTheme({
    typography: {
      palette:{
        primary : {
            main : "var(--primary);"
        },
          secondary : {
              main : "var(--primary);"
          }
      },
      fontFamily: [
        '"GilroyM"',
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <>
      <NextSeo
          title="AgroSup : Login"
          description="Cultivating a farm produce market of no monopoly. We are web 3.0 market for the direct relation of farmers to businesses."
        />
      <main>
        <Header></Header>
        <section className={styles.auth}>
          <div className={styles.authContainer}>
            <h2>
                Producers-Farmers
            </h2>
            <ThemeProvider theme={theme}>
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off" className={styles.form}
                >
                <TextField maxLength="12" type="" id="standard-basic" label="Aadhar" variant="standard" />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">category</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Farmer</MenuItem>
                    <MenuItem value={20}>Logistics</MenuItem>
                    <MenuItem value={30}>Buyer</MenuItem>
                    </Select>
                </FormControl>
                <TextField id="standard-basic" maxLength="10" label="Phone" type="" variant="standard" />
                <div className={styles.submitButton}>
                    <Button variant="contained" className={styles.submit}><ArrowForwardIosIcon /></Button>
                </div>
                </Box>
            </ThemeProvider>
            <div className={styles.completion}>
                <div className={styles.progress}>
                    <div style={{width:`${25}%`}}></div>
                </div>
                <h6>25%</h6>
            </div>
            
          </div>
        </section>
      </main> 
    </>
  )
}
