import React from 'react';
import Pdf from "react-to-pdf";
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaFileDownload } from "react-icons/fa";
import { Button } from 'react-bootstrap';

const ref = React.createRef();

const GeneratePdf = () => {
    const course = useLoaderData();
    const { name, CourseBody, photoURL, price } = course;
    return (
        <div >

            <div ref={ref}>
                <Card style={{ width: '40rem' }} className=' mb-4'>
                    <Card.Img variant="top" src={photoURL} />
                    <Card.Body>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Pdf targetRef={ref} filename="course.pdf">
                                {({ toPdf }) => <FaFileDownload onClick={toPdf} style={{ height: '40px' }}></FaFileDownload>}
                            </Pdf>
                            <Card.Title className='mx-3'>{name}</Card.Title>
                        </div>
                        <Card.Text>
                            {

                                <p>{CourseBody}</p>
                            }
                        </Card.Text>
                        <p>Price : $ {price}</p>
                        <Link to={'/courses'}>
                            <Button variant='primary'>All Courses</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default GeneratePdf;