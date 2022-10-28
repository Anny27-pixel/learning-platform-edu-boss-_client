import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaFileDownload } from "react-icons/fa";
const Course = () => {

    const course = useLoaderData();
    const { id, name, CourseBody, photoURL, price } = course;
    return (
        <div>
            <Card style={{ width: '40rem' }} className=' mb-4'>
                <Card.Img variant="top" src={photoURL} />
                <Card.Body>
                    <div className='d-flex justify-content-center align-items-center'>
                        <FaFileDownload style={{ height: '40px' }}></FaFileDownload>
                        <Card.Title className='mx-3'>{name}</Card.Title>
                    </div>
                    <Card.Text>
                        {

                            <p>{CourseBody}</p>
                        }
                    </Card.Text>
                    <p>Price : $ {price}</p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;