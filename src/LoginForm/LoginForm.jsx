import React, { useState, useEffect } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [photoLink, setPhotoLink] = useState('');
    const [userId, setUserId] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedInfo = localStorage.getItem("infos");
        if (storedInfo) {
            const infosLparse = JSON.parse(storedInfo);
            setFullName(infosLparse.fullnameL);
            setFirstName(infosLparse.firstL);
            setLastName(infosLparse.lastL);
            setEmail(infosLparse.mailL);
            setUserId(infosLparse.id_numL);
            setPhotoLink(infosLparse.photo_linkL);
            setIsLoggedIn(true);
        }
    }, []);

    const handleCredentialResponse = (response) => {
        const responsePayload = decodeJwtResponse(response.credential);
        const infos = {
            fullnameL: responsePayload.name,
            photo_linkL: responsePayload.picture,
            firstL: responsePayload.given_name,
            lastL: responsePayload.family_name,
            mailL: responsePayload.email,
            id_numL: responsePayload.sub
        };
        const infosL = JSON.stringify(infos);
        localStorage.setItem("infos", infosL);
        setFullName(infos.fullnameL);
        setFirstName(infos.firstL);
        setLastName(infos.lastL);
        setEmail(infos.mailL);
        setUserId(infos.id_numL);
        setPhotoLink(infos.photo_linkL);
        setIsLoggedIn(true);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Your existing form submission logic
    };

    const handleSignOut = () => {
        localStorage.clear();
        setIsLoggedIn(false);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={email} required onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} required onChange={(e) => setPassword(e.target.value)} />

                <center><button type="submit">Login</button></center>
            </form>

            {isLoggedIn ? (
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" src={photoLink} alt="Your Image" />
                    <div className="card-body">
                        <h5 className="card-title">{fullName}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">ID: <span>{userId}</span></li>
                        <li className="list-group-item">First Name: <span>{firstName}</span></li>
                        <li className="list-group-item">Last Name: <span>{lastName}</span></li>
                        <li className="list-group-item">Email: <span>{email}</span></li>
                    </ul>
                    <button className="btn btn-primary mt-3 font-weight-bold" onClick={handleSignOut}>Sign out</button>
                </div>
            ) : (
                <div id="g_id_onload" data-client_id="895318556149-1ukshl6uol3qf8qse2cqo4745otcbc4f.apps.googleusercontent.com"
                    data-context="signup" data-ux_mode="popup" data-callback={handleCredentialResponse}
                    data-auto_prompt="false">
                    <div id="sign" className="g_id_signin" data-type="standard"
                        data-shape="rectangular" data-theme="outline" data-text="signin_with" data-size="large"
                        data-logo_alignment="left">
                        <GoogleLoginButton />
                    </div>
                </div>
            )}
        </div>
    );
};

const decodeJwtResponse = (data) => {
    let tokens = data.split(".");
    return JSON.parse(atob(tokens[1]));
};

const GoogleLoginButton = () => {
    return (
        <button className="btn btn-primary">
            Sign in with Google
        </button>
    );
};

export default LoginForm;
