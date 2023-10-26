import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login-box bg-yellow-400">
            <form className="p-2 flex flex-col items-center">
                <label className="font-bold">Iniciar Sesión</label>
                <div className="input-group w-fit">
                    <label htmlFor="usuario">Usuario</label>
                    <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        placeholder="Usuario"
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
                        placeholder="Contraseña"
                        required
                        className="p-2"
                    />
                </div>
                <button type="submit" className="p-2 bg-yellow-400 text-black">
                    Iniciar Sesión
                </button>
                <div className="registration">
                    <Link to="/Registro" className="text-black">
                        ¿Has olvidado la contraseña?
                    </Link>
                    <Link to="" className="text-black">
                        ¿No tienes una cuenta?
                    </Link>
                </div>
                <div className="social-login">
                    <button type="button" className="google-button bg-yellow-400 text-black">
                        Google
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
