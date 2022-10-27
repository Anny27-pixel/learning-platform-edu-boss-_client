import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ course }) => {
    const { id, name, CourseBody, photoURL, price } = course;
    return (
        <Card style={{ width: '40rem' }} className=' mb-4'>
            <Card.Img variant="top" src={photoURL} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {
                        CourseBody.length > 250 ?
                            <p>{CourseBody.slice(0, 250) + '...'} <Link to={`/courses/${id}`}>Read More</Link></p>
                            :
                            <p>{CourseBody}</p>
                    }
                </Card.Text>
                <p>Price : $ {price}</p>
                <Button variant="primary">Get premium access</Button>
            </Card.Body>
        </Card>
    );
};

export default CourseCard;