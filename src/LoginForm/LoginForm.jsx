import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Your existing form submission logic
    };

    const responseGoogle = (response) => {
        console.log(response);
        // Handle Google Sign-In response here
        if (response.profileObj) {
            // Log user details to console
            console.log('User Details:', response.profileObj);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleFormSubmit}>
                {/* Your email and password input fields */}
            </form>
            <GoogleLogin
    clientId="895318556149-1ukshl6uol3qf8qse2cqo4745otcbc4f.apps.googleusercontent.com"
    buttonText="Sign in with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    redirectUri="https://www.youtube.com/" // Specify your redirect URI here
/>

        </div>
    );
};

export default LoginForm;
