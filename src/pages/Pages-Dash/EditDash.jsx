import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams, redirect } from 'react-router-dom'; //Obtiene el Id de la ruta


export default function EditUser() {

    const params = useParams()
    // console.log('Este es un parametro '+ params.id)
    console.log(params)
    var id = params.id;
    console.log(id)

    const [User, SetUser] = useState({
        
        username: "",
        password: ""
    })

    useEffect(() => {

        const loadUser = async () => {
            const response = await axios.get(`http://localhost:3000/users/${id}`)
            console.log(response);
            SetUser({
                
                Username: response.data.username,
                Password: response.data.password
            })
        };
        loadUser(); //Ejecutar el método buscar usuario
    }, []);




    return (
        <>
            <Formik
                initialValues={User} //Una vez buscado los datos lo va mapear de forma automatica
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    console.log(values)

                    var res = await axios.patch(`http://localhost:3000/users/${id}`, values)
                    actions.resetForm()
                    // alert('Datos actualizados correctamente')
                    if (res.status == 200) {
                        //Redirecciomar 
                        window.location = '/dashboard';
                    }
                    else {
                        alert("Succedio un error")
                    }
                }}
            >
                {({ handleChange, handleSubmit, values }) => (

                    <div className='container mx-15 w-50  p-20'>
                        <h2 className="font-black text-3lx text-center">Editar usuario</h2>
                        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Username
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text"
                                        placeholder=""
                                        name="Username"  // Nombre corresponde al campo "Nombre" en initialValues
                                        onChange={handleChange}
                                        value={values.username}
                                    />

                                </div>
                                
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Contraseña
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="password"
                                        placeholder=""
                                        name="Password"  // Corregir el atributo name a "Username"
                                        onChange={handleChange}
                                        value={values.password}
                                    />

                                    <p className="text-gray-600 text-xs italic">Mínimo 6 caracteres</p>
                                </div>
                            </div>
                            
                            <br />
                            <button href='/tabla-usuario' className="bg-transparent hover:bg-gray-400 text-gray-700 font-semibold hover:text-white py-0 px-4 border border-gray-700 hover:border-transparent rounded" type='onSubmit'>
                                Guardar
                            </button>
                        </form>

                    </div>

                )}
            </Formik>

        </>
    )
}