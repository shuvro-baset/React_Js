
import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom'

const Todo = (props) => {
    const {title, id, userId, completed} = props.todo;
    const history = useHistory();

    const url = `/todos/${id}`
    const btnHandler = () =>{
        console.log("lakdjsflk")
        history.push(`/todos/${id}`)
    }
    
    return (
        
        <Col md={4}>
            <Card >
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <h2>User Id: {userId}</h2>
                        <p>Status: {completed}</p>

                    </Card.Text>
                    <Button variant="primary" onClick={btnHandler} >see more</Button>
                    <Link to={url}>visit me</Link>
                </Card.Body>
            </Card>
        </Col>
            
        
    );
};

export default Todo;