import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Box sx={{justifyContent:"center", display: { xs: "center", md: "fixed" }}}>
            <Box sx={{ bgcolor: '#f2f2f2', height: '100vh', width: '80vw' , display: { xs: "center", md: "fixed" }, }} >

                Anton loh

            </Box>
        </Box>
        
    </React.Fragment>
  );
}