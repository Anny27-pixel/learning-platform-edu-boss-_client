import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';


const Courses = () => {
    const course = useLoaderData();
    const { id, name, CourseBody, photoURL, price } = course;
    return (
        <Card style={{ width: '40rem' }} className=' mb-4'>
            <Card.Img variant="top" src={photoURL} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {
                        CourseBody
                    }
                </Card.Text>
                <p>Price : $ {price}</p>
                <Button variant="primary">Get premium access</Button>
            </Card.Body>
        </Card>
    );
};

export default Courses;