import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { FaUser, FaBook } from "react-icons/fa";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e));

    }
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <FaBook></FaBook>
                <Navbar.Brand className='mx-3' href="/">Edu-Boss</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/courses">Courses</Nav.Link>
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>

                        <Nav.Link eventKey={2} href="#deets">
                            {
                                user ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <button onClick={handleLogOut}>Logout</button>
                                    </>
                                    :
                                    <>
                                        {user}
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">

                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;