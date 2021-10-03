import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router';

const SingleTodos = () => {
    const {id} = useParams();
    const [single, setSingle] = useState({});
    console.log(id)
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
        fetch(url)
            .then(res=>res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h3>{id}</h3>
        </div>
    );
};

export default SingleTodos;