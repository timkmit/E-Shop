import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import Box from '@mui/material/Box';
import './style.css'

function BasicExampleCategory(props) {

    const {title, description, img} = props;

    

    return (

        <Box className="cardBox">
            <Card
                className='cards'
                style={{
                    width: '22rem',
                    height: '25rem'
                }}>
                <Box className='cardBoxImg'>
                    <Card.Img className='cardImg' variant="top" src={img}/>
                </Box>

                <Card.Body className='cardBody'>
                    <Card.Title className='cardTitle'>{title}</Card.Title>
                    <Card.Text className='cardDescription'>
                        {description}
                    </Card.Text>
                    <Button
                        className='cardButton'
                        variant="outlined"
                        style={{
                            fontSize: '0.75rem'
                        }}>Посмотреть</Button>
                </Card.Body>
            </Card>
        </Box>

    );
}

export default BasicExampleCategory;