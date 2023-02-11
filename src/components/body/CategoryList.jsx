import BasicExample from "../card/Card";
import axios, {spread} from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react'
import './style.css'


const CategoryList = () => {

    const [category, setCategory] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/`)
            .then(response => {
                response
                    .data
                    .forEach(element => {
                        if (element.id) {
                            setCategory(category => [
                                ...category,
                                element
                            ]);
                        }
                        if (!element.id) {
                            setCards(cards => [
                                ...cards,
                                element
                            ]);
                        }
                    });
            });

    }, []);

    return (

        <Grid container="container" spacing={2}>
            <Grid container="container" justifyContent="center">

                {
                    cards.map((cards, value) => (
                        <Grid className="pagesLink2" key={value} item="item">
                            <BasicExample
                                title={cards.title}
                                description={category.description}
                                img={cards.photo}
                                key={value}/>
                        </Grid>
                    ))
                }

            </Grid>

            {/*<Box style={{display: "flex", }}>
             {category.map((category, i) =>
            <BasicExample
                title={category.title}
                description={category.description}
                img = {category.photo}
                key={i} />)}
             </Box>*/
            }
        </Grid>

    );
}

export default CategoryList;