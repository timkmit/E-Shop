import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import axios, { spread } from 'axios';
import BasicExample from '../card/Card';
import {useState, useEffect} from 'react'


export default function SimpleContainer() {

    const [category, setCategory] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/`).then(response => {
        response.data.forEach(element => {
            if (element.id){
                setCategory(category => [...category, element]);
            }
            if (!element.id){
                setCards(cards => [...cards, element]);
            }
        });
    });

    }, []);
    
    

    




  return (
    <React.Fragment>
      <CssBaseline />
        <Box sx={{justifyContent:"center", display: { xs: "center", md: "fixed" }}}>
            <Box sx={{ bgcolor: '#f2f2f2', height: '100vh', width: '80vw' , display: { xs: "center", md: "fixed" }, }} >

            
                {category.map((category, i) => 
                <BasicExample 
                    title={category.title}
                    description={category.description}
                    img = {category.photo}
                    key={i} />)}
                

            </Box>
        </Box>
        
    </React.Fragment>
  );
}