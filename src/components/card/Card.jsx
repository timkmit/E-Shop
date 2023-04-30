import { BrowserRouter, Route, Routes, Link, Switch, useHistory } from 'react-router-dom';
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import Box from '@mui/material/Box';
import './style.css'

function BasicExample(props) {
  const { id, title, description, img, price } = props;

  return (
    <Box className="cardBox" key={id}>
      <Card className="cards">
        <Box className="cardBoxImg">
          <Card.Img className="cardImg" variant="top" src={img} />
        </Box>

        <Card.Body className="cardBody">
          <Card.Title className="cardTitle">{title}</Card.Title>
          <Card.Text className="cardDescription">{description}</Card.Text>

          <Card.Text className="cardDescription">{price} руб.</Card.Text>

            <Button 
              variant="outlined" 
              component={Link} 
              to={{ 
                pathname: "/singlecard", 
                state: { 
                  id, 
                  title, 
                  description, 
                  img, 
                  price 
                } 
              }}
            >
              Посмотреть
            </Button>
            
        </Card.Body>
      </Card>
    </Box>
  );
}

export default BasicExample;
