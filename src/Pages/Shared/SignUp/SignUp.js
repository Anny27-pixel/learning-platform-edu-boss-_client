import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { useState } from 'react';
const SignUp = () => {
    const [error, setError] = useState('');

    const { providerLogin, createUser, updateUserProfile } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(e => console.error(e));
    }
    const githubProvider = new GithubAuthProvider()
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateProfile(name, photoURL);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });

    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="name" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter photo url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                <Form.Text className='text-danger'>{error}</Form.Text>
            </Form>
            <p>Already have an Account ? <Link to='/login'>LogIn</Link></p>

            <hr />

            <ButtonGroup className='d-flex' vertical>
                <Button onClick={handleGoogleSignIn} className='mb-3' variant='outline-primary'><FaGoogle></FaGoogle> Login with Google</Button>
                <Button onClick={handleGithubSignIn} variant='outline-dark'><FaGithub></FaGithub>  Login with Github</Button>
            </ButtonGroup>
        </div >


    );
};

export default SignUp;