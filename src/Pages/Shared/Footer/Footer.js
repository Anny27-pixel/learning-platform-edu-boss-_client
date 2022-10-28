import React from 'react';

import Card from 'react-bootstrap/Card';
const Footer = () => {
    return (
        <Card className='bg-primary text-light'>
            <Card.Header className='text-center'>Edu Boss</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0 text-center">
                    <p>
                        <small>copyright coming soon!!!</small>
                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default Footer;