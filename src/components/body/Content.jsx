import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import CategoryList from './CategoryList';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"


export default function SimpleContainer() {

  return (

    <>
      <React.Fragment>
      
      <CssBaseline />
      
      
        <Box sx={{justifyContent:"center", display: { xs: "center", md: "fixed" }}}>
            <Box sx={{ bgcolor: '#f2f2f2', backgroundAttachment: 'fixed' , width: '80vw' , display:  "block", }} >
            
            
            <CategoryList />
                

            </Box>
        </Box>
        
      </React.Fragment>

      
    </>
    
  );
}