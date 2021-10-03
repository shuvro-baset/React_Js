import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Todo from '../Todo/Todo';

const Todos = () => {
    const [todos, setTodos] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res=> res.json())
            .then(data => setTodos(data))
    }, [])
    return (
        <>
            <h3>all todos.........</h3>
            <Container>
                <Row>
                    {
                        todos.map(todo => <Todo key={todo.id}
                            todo={todo}
                        ></Todo>)
                    }
                </Row>
                
            </Container>

            
        </>
    );
};

export default Todos;