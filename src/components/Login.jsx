import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';


function Login() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

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
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="login-box bg-green-100 p-4">
                <form className="flex flex-col items-center">
                    <label className="font-bold">Iniciar Sesión</label>
                    <div className="input-group w-fit">
                        <label htmlFor="usuario">Usuario</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder=""
                            required
                            className="p-2"
                        />
                    </div>
                    <div className="input-group w-fit">
                        <label htmlFor="contrasena">Contraseña</label>
                        <input
                            type="password"
                            id="contrasena"
                            name="contrasena"
                            placeholder=""
                            required
                            className="p-2"
                        />
                    </div>
                    <button type="submit" className="p-2 bg-red-200 text-black">
                        Iniciar Sesión
                    </button>
                    <div className="registration">
                        <Link to="/Registro" className="text-black">
                            ¿Has olvidado la contraseña?
                        </Link>

                        <Link to="/registro" className="text-black">
                            ¿No tienes una cuenta?
                        </Link>
                    </div>
                    <div>
                        <h2> Google </h2>
                        <br />
                        <br />{profile ? (
                            <div>
                                <img src={profile.picture} alt="user image" />
                                <h3>User Logged in</h3>
                                <p>Name: {profile.name}</p>
                                <p>Email Address: {profile.email}</p>
                                <br />
                                <br />
                                <button onClick={logOut}>Log out</button>
                            </div>
                        ) : (
                            <button onClick={() => login()}>Sign in with Google 🚀 </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
