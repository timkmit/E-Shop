import * as React from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from "@mui/material/Button";

const pages = ["ПРОДУКЦИЯ", "ДОКУМЕНТЫ", "ВОПРОС-ОТВЕТ", "О НАС"];

const UnderHeader = () => {

    return ( 

        <ButtonGroup variant="text" aria-label="text button group" color="inherit">
        {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 0.1, color: "#2E3B55", display: "block" }}
              >
                {page}
              </Button>
            ))}
        </ButtonGroup>

     );
}
 
export default UnderHeader;