import * as React from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from "@mui/material/Button";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import Items from '../pages/Items/Items'
import Faqq from './../pages/Faq/Faqq'
import Documentss from './../pages/Documents/Documentss'
import About from '../pages/About/About'

const UnderHeader = () => {

    return ( 
        <>
          <ButtonGroup variant="text" aria-label="text button group" 
        color="inherit" >

              <Button
                href="/items"
                sx={{ my: 0.1, color: "#2E3B55", display: "block", fontSize:"16px"}}
                >ПРОДУКЦИЯ
              </Button>

              <Button
                href="/doc"
                sx={{ my: 0.1, color: "#2E3B55", display: "block", fontSize:"16px"}}
                >ДОКУМЕНТЫ
              </Button>

              <Button
                href="/faq"
                sx={{ my: 0.1, color: "#2E3B55", display: "block", fontSize:"16px"}}
                >ВОПРОС-ОТВЕТ
              </Button>

              <Button
                href="/about"
                sx={{ my: 0.1, color: "#2E3B55", display: "block", fontSize:"16px"}}
                >О НАС
              </Button>

        </ButtonGroup>

        <Routes>
          
            <Route path="/items" element={<Items/>} >
              
            </Route>

            <Route path="/doc" element={<Documentss/>} >
              
            </Route>

            <Route path="/faq" element={<Faqq/>} >
              
            </Route>

            <Route path="/about" element={<About/>} >
              
            </Route>


        </Routes>
          
        </>
        


     );
}
 
export default UnderHeader;