import BasicExample from "../card/Card";
import axios, {spread} from 'axios';
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react'
import './style.css'


const CategoryList = () => {

    const [category, setCategory] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/')
            .then(response => {
                setCards(response.data);
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных: ', error);
            });
    }, []);

    return (

        <Grid container={true} spacing={2}>
            <Grid container={true} justifyContent="center">

                {
                    cards.map((cards, value) => (
                        <Grid className="pagesLink2" key={value}>
                            <BasicExample
                                id={value}
                                title={cards.title}
                                img={cards.photo}
                                key={value}
                                price={cards.price}/>
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