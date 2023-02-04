import {Typography} from "@mui/material";
import {useState, useEffect} from 'react';
import axios, {spread} from 'axios';
import Grid from '@mui/material/Grid';
import BasicExample from "./../../card/Card";

const Items = () => {

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
                    category.map((category, value) => (
                        <Grid key={value} item="item">
                            <BasicExample
                                title={category.title}
                                description={category.description}
                                img={category.photo}
                                key={value}/>
                        </Grid>
                    ))
                }

            </Grid>

        </Grid>
    );
}

export default Items;