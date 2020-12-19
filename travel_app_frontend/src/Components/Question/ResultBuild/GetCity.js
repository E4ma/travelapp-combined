import React from 'react';
import './ResultBuild.css';
import { Image } from 'semantic-ui-react';
import hiking from './hiking.jpg';
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'


const styles = {
    root: {
        margin: '40px'
    },
    outer: {
        display: 'flex',
    },
    inner: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1.8rem',
    },
    formMain: {
        width: "100%",
        margin: "0px",
        fontSize: "2.5rem",
        fontFamily: 'Roboto',
        padding: "8%",
        borderRadius: "20px",
        color: "#357e85",
        paddingTop: "15%"
    },
    formLabel: {
        borderBottom: "1px solid #96e1f3",
        borderWidth: "thick"
    }
}
const GetCity = (props) => {

    const { register, handleSubmit, errors} = useForm()
    return(
            <div  className='city-background' >
                <div className='cityForm'>
                    <Form style={styles.formMain} onSubmit={handleSubmit(props.cityFunc)}>
                        <Form.Group controlId="formCity">
                            <Form.Label>Enter your city: </Form.Label>
                            <Form.Control style={styles.formLabel} name="city" type="text" placeholder="enter your city: " ref={register({required: true})}/>
                            {errors.city && <p>This field is required</p>}
                        </Form.Group>
                        <Form.Group controlId="formNumResults">
                            <Form.Label>Number of results: </Form.Label>
                            <Form.Control style={styles.formLabel} type="number" name="results" placeholder="number of results" ref={register({required: true, valueAsNumber: true, maxLength: '1', min: 1})} />
                            {errors.results && errors.results.maxLength !== '1' && <p>Value must be a number between 1 and 10</p>}
                            <Form.Text className="text-muted">
                                *Number of results per activity
                            </Form.Text>
                        </Form.Group>
                        <Button variant="outline-info" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                
                <div>
                    <Image src={hiking} size='huge' />
                   
                </div>
        </div>
    )
}

export default GetCity