import React from 'react';
import emailjs from 'emailjs-com'
import { Form, Row, Col, Button } from 'react-bootstrap'
import './Contact.css'
import { useForm } from 'react-hook-form'

const styles = {
    root: {
        width: "70%",
        margin: "auto",
        marginTop: "3%",
        background: "antiquewhite",
        padding: "5%",
        fontSize: "1.5rem",
        borderRadius: "20px",
        backgroundColor: "#357E85"
    },
    labelText: {
        fontFamily: "Roboto",
        fontSize: "1.5rem",
        color: "#CCEBF4",
    }
}

const Contact = () => {

    const { register, handleSubmit, errors} = useForm()

    function sendEmail(event, e) {
        emailjs.sendForm('service_2f2atcu', 'template_q11eusf', e.target, 'user_pNBd0vrDLxjRHJJgdtsqT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });

        e.target.reset()
    }

    return (
        <div style={styles.root}>
                <form onSubmit={handleSubmit(sendEmail)}>
                    <Row>
                        <Col>
                            <Form.Group controlId="emailID">
                                <Form.Label style={styles.labelText}>Email Address</Form.Label>
                                <Form.Control type="email" name="from_email" placeholder="name@example.com" ref={register({required: true})}/>
                                {errors.from_email && <p>This field is required</p>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="fname">
                                <Form.Label style={styles.labelText}>First Name</Form.Label>
                                <Form.Control type="text" name="fname" placeholder="First Name:" ref={register({required: true})}/>
                                {errors.fname && <p>This field is required</p>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="lname">
                                <Form.Label style={styles.labelText}>Last Name</Form.Label>
                                <Form.Control type="text" name="lname" placeholder="Last Name:" ref={register({required: true})}/>
                                {errors.lname && <p>This field is required</p>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="message">
                                <Form.Label style={styles.labelText}>Message</Form.Label>
                                <Form.Control as="textarea" name="message" rows={3} placeholder="Leave a message here" ref={register({required: true})} />
                                {errors.message && <p>This field is required</p>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <button type='submit' className="custom-button">SUBMIT</button>
                </form>
        </div>
      );
}
 
export default Contact;