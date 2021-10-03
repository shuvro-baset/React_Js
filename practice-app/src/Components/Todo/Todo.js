
import React from 'react';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';

const Todo = (props) => {
    const {todo} = props;
    
    return (
        
        <Col md={4}>
            <Card >
                <Card.Body>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>
                        <h2>User Id: {todo.userId}</h2>
                        <p>Status: {todo.completed}</p>
                    </Card.Text>
                    <Button variant="primary">see more</Button>
                </Card.Body>
            </Card>
        </Col>
            
        
    );
};

export default Todo;