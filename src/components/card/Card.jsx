import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Box from '@mui/material/Box';
import './style.css'

function BasicExample(props) {

    const {title, description, img} = props;

    

  return (

    <Box className="cardBox">
      <Card className='cards' style={{ width: '18rem', height: '23rem'}}>
        <Box className='cardBoxImg'>
          <Card.Img className='cardImg' variant="top" src={img}/>
        </Box>
      
      <Card.Body className='cardBody'>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='cardDescription'>
          {description}
        </Card.Text>
        <Button variant="primary">Узнать больше</Button>
      </Card.Body>
      </Card>
    </Box>
    

  );
}

export default BasicExample;