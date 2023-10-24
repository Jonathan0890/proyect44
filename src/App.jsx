import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
/*import './css/Google.css'*/

function App() {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);


    const responseFacebook = (response) => {
        console.log(response);
    }
    const componentClicked = () => {
        alert('Evento onClick')
    }




    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return (<>
        <div className='container'>
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div className='Perfil-google'>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button className='button-google' onClick={() => login()}>Sign in with Google 🚀 </button>
            )}
        </div>

        <div className='container-face'>
            <FacebookLogin 
                appId="7191455840899456"
                autoLoad={true}
                callback={responseFacebook}
                fields="name,email,picture"
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
            />

        </div>

    </>
    );
}
export default App;