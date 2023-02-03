import BasicExample from "../card/Card";
import axios, { spread } from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react'

const CategoryList = () => {

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


        <Grid container spacing={2}>
            <Grid container justifyContent="center" >

                {category.map((category, value) => (
                <Grid key={value} item>
                    <BasicExample 
                title={category.title}
                description={category.description}
                img = {category.photo}
                key={value} /> 
                </Grid>
          ))}

        </Grid>
        
        {/*<Box style={{display: "flex", }}>
             {category.map((category, i) => 
            <BasicExample 
                title={category.title}
                description={category.description}
                img = {category.photo}
                key={i} />)}
             </Box>*/}
        </Grid>

     );
}
 
export default CategoryList;