import React from 'react';
import '../css/Login.css';

function Login() {
    return (<>
        <div className="bg-yellow-400 text-black font-bold flex flex-col w-fit h-fit p-2 m-4 gap-6 items-center">
            <label>Inicia sesión</label>
            <div className="flex flex-row ">
                <label className="">Usuario:</label>
                <input className="bg-white w-[10rem] h-8" />
            </div>
            <div className="flex flex-row">
                <label>Contraseña:</label>
                <input className="bg-white w-[10rem] h-8" />
            </div>
            <button className="w-fit h-fit">Inicia sesión</button>
        </div>
        </>
    );
}

export default Login;

