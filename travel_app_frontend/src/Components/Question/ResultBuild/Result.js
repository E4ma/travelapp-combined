import React, { useState, useEffect} from 'react'
import { Button, Card, Row, Col, ListGroup,ListGroupItem } from 'react-bootstrap'

const styles = {
    root: {
        margin: '1% 0',
    },
    cardMain: {
        width: '30%',
        padding: '1%',
        margin: 'auto'
    },
    cardTitle : {
        height: '2rem'
    },
    cardImage: {
        width: '217px',
        height: '187px',
        objectFit: 'cover'
    },
    listItemCat: {
        marginBottom: '5px',
        borderRadius: '5px',
        fontWeight: 'bold',
        fontSize: '1rem'
    },
    listItem: {
        marginBottom: '5px',
        borderRadius: '5px',
        
    }
}
const Result = ({name, phoneNumber, address, url, category, lat, lon}) => {
    const [photo, setPhoto] = useState("")
    const [checkurl, setCheckUrl] = useState("")

    function isUrl() {
        if (!url) {
            setCheckUrl("https://www.google.ca/search?q=" + name.replaceAll(' ', '+'))
        } else {
            setCheckUrl(`https://${url}`)
        }
    }
    useEffect(()=>{
        isUrl()
    }, []) 
    useEffect(()=>{
        let center = `${lat},${lon}`
        fetch(`https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=13&size=217x187&maptype=roadmap
        &key=AIzaSyBQ_yHpHqrQZsU8L0cM98UNYLlOegf_3Ow`)
        .then(response => setPhoto(response.url))
    }, [])

    return(
        <div style={{margin:'1%'}}>
            <Card style={{width: '70%', padding: '1%', margin: 'auto', borderRadius: '5px'}}>
                <Card.Header>{name}</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xs={4}>
                            {photo === "" ? null : <Card.Img style={styles.cardImage} variant="top" src={photo} /> }
                        </Col>
                        <Col xs={3}>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={styles.listItemCat} variant="dark">Phone number</ListGroup.Item>
                                <ListGroup.Item style={styles.listItemCat} variant="dark">Street Address</ListGroup.Item>
                                <ListGroup.Item style={styles.listItemCat} variant="dark">Website</ListGroup.Item>
                                <ListGroup.Item style={styles.listItemCat} variant="dark">Category</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col xs={5}>
                            <ListGroup variant="flush">
                                <ListGroup.Item style={styles.listItem} variant="dark">{phoneNumber}</ListGroup.Item>
                                <ListGroup.Item style={styles.listItem} variant="dark">{address}</ListGroup.Item>
                                <ListGroup.Item style={styles.listItem} variant="dark">{url}</ListGroup.Item>
                                <ListGroup.Item style={styles.listItem} variant="dark">{category}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <a style={{margin: 'auto'}} href={checkurl} target="_blank">
                            <Button variant="outline-info">Find Online</Button>
                        </a>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Result