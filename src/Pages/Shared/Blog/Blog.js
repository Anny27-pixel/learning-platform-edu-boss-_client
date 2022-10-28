import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2> welcome to Blogs</h2>
            <div>
                <h4>what is cors?</h4>
                <p>Cors means Cross-Origin Resource Sharing . It is an HTTP-based security mechanism controlled and enforced by the client . It allows a service like api to indicate any origin other than its own from which the client can request resources.</p>
            </div>
            <div>
                <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                    Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
                    there are other option for implement authentication .they are..
                    1. Password-based authentication
                    2. Multi-factor authentication
                    3.Certificate-based authentication
                    4.Biometric authentication
                </p>
            </div>
            <div>
                <h4>How does the private route work?</h4>
                <p>The react private route component renders child components like children if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            </div>
            <div>
                <h4>What is Node? How does Node work?</h4>
                <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </p>
            </div>
        </div>
    );
};

export default Blog;