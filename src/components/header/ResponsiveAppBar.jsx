import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import IMG from './33333.png'



function ResponsiveAppBar() {

  return (
    <AppBar position="static" style ={{background: '#2E3B55'}}>
    <Container>

        
      <Container maxWidth="xl" >
        <Toolbar disableGutters >

        <Box sx={{marginTop:0.5, marginRight:14}}>
        <img src={IMG} width={80} ></img>
        </Box>   
          

            <Box sx={{ flexGrow: 1, display: { xs: "center", md: "fixed" }, justifyContent:"center"}}>
                <Typography
                variant="h5"
                
                component="a"
                href="/"
                sx={{
                mr: 3,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 500,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none"
                }}
            >
                
                БАЗА СТРОИТЕЛЬНЫХ МАТЕРИАЛОВ
            </Typography>
            
            </Box>
            <Box sx={{ flexGrow: 0 , margin: 0}}>
          <Button variant="contained">Заказать звонок</Button>
            
          </Box>
          
        </Toolbar>
        
        
        

        
      </Container>
      
      </Container>
      
    </AppBar>
    
    
  );
}
export default ResponsiveAppBar;