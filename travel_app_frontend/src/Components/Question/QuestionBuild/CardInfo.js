import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import './cardstyle.css'


const styles = {
  image: {
    width: '100%',
    objectFit: 'cover',
    height: '30vh'
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '2rem',
    height: '2rem',
  },
  cardBody: {
    position: 'relative'
  },
  button: {
    position: 'absolute',
    width: '80%',
    bottom: '2%',
    left: '10%',
  },
  cardText: {
    fontSize: '1.2rem',
    fontStyle: 'italic'
  },
  cardRoot: {
    height: '100%'
  },
  cardBullet: {
    fontSize: '1.5rem',
    padding: '20px 0',
    margin: '5px 0',
    textAlign: 'center'
  },
  listContainer: {
    marginBottom: '40px',
    marginTop: '10px'
  }
};



const CardInfo = (props) => {
  return (
      
      <Card border="dark" bg="light" >
        <Card.Img style={styles.image} className="img-fluid" variant="top" src={props.cardImage} />
        <Card.Body>
          <Card.Title style={styles.title}>{props.cardTitle}</Card.Title>
          <Card.Text style={styles.cardText}>
            {props.cardDescription}
          </Card.Text>
          <ListGroup style={styles.listContainer} variant='flush'>
            {props.activities.map((item, i)=>{
              return <ListGroup.Item key={i} style={styles.cardBullet}>{item}</ListGroup.Item>
            })}
          </ListGroup>
          <Button style={styles.button} size="lg"  variant="outline-info" onClick={()=>{props.categoryFunc(props.activities)}}>Select</Button>
        </Card.Body>
      </Card>
      
  )
};

export default CardInfo;
