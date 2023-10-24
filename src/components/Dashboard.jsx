import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import '../css/Dashboard.css';
import Formul from '../components/Formul';
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {
    const navigate = useNavigate()

    const [Users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3000/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    }

    const HandeDelte = async (id) => {
        const response = await axios.delete(`http://localhost:3000/users/${id}`);

        if (response.status == 200) {
            alert("Se borro correctamente")
        } else {
            alert("Succedio un error")
        }
        fetchUsers()
    }

    return (
        
        <div className='grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen'>
            
            <Sidebar />
            <main className="lg:col-span-3 xl:col-span-5 bg-gray-00 p-8 h-[100vh] overflow-y-scroll">
                <br />
                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

                </section>
                <Formul />
                <div class="p-4 sm:ml-50">
                    <div class="p-20 border-dashed">

                        <div class="flex items-center justify-center h-48 mb-4 rounded">
                            <div class="container">
                                <div class="relative  left-70 top-24">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    #
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Username
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Contraseña
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Fecha de registro
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Acción
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Users.map((users, i) => (
                                                <tr className='border-b dark:border-gray-700' key={i}>
                                                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                                        {users.id}
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        {users.username}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {users.password}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {users.createdAt}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                    <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=> navigate(`/EditDash/${users.id}`)}> Editar</a>
                                                        {"      "}
                                                        <a className="btn btn-danger mr-auto font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => HandeDelte(users.id)}>Eliminar</a>

                                                    </td>
                                                </tr>

                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </main>

        </div>
    );
}
