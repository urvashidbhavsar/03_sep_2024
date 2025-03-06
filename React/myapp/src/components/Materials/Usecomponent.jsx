import React from 'react'
import { Button, Container, Alert } from 'react-bootstrap'
// import { Accordion } from 'react-bootstrap'
// import Alert from 'react-bootstrap/Alert'

const Usecomponent = () => {
    return (
        <>
            <Container>
                <button className='btn btn-success'>Click</button>
                <Button variant='primary' className='p-3'>Click</Button>
                <Alert variant="success">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                        Aww yeah, you successfully read this important alert message. This
                        example text is going to run a bit longer so that you can see how
                        spacing within an alert works with this kind of content.
                    </p>
                </Alert>
            </Container>
        </>
    )
}

export default Usecomponent
