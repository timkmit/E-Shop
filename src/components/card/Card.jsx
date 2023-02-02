import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'

function BasicExample(props) {

    const {title, description, img} = props;

    

  return (

    <Card className='cards' style={{ width: '18rem' }}>

      <Card.Img className='cardImg' variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Узнать больше</Button>
      </Card.Body>
    </Card>

  );
}

export default BasicExample;