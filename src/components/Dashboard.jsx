import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import Formul from '../components/Formul';

export default function Dashboard() {
    const navigate = useNavigate();

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

    const HandleDelete = async (id) => {
        const response = await axios.delete(`http://localhost:3000/users/${id}`);

        if (response.status === 200) {
            alert("Se borró correctamente");
        } else {
            alert("Sucedio un error");
        }
        fetchUsers();
    }

    return (
        <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
            <Sidebar />
            <main className="lg:col-span-3 xl:col-span-5 bg-purple-300 p-8 h-screen overflow-y-scroll">
                <br />
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {/* Contenido de la sección */}
                </section>
                <Formul />
                <div className="p-4 sm:ml-50">
                    <div className="p-30 border-dashed">
                        <div className="flex items-center justify-center h-48 mb-4 rounded">
                            <div className="container">
                                <div className="relative left-70 top-24">
                                    <table className="w-full text-sm text-left text-dark-300 dark:text-gray-700">
                                        <thead className="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    #
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Username
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Contraseña
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Fecha de registro
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Acción
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Users.map((user, i) => (
                                                <tr className="border-b dark:border-gray-700" key={i}>
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        {user.id}
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {user.username}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {user.password}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {user.createdAt}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => navigate(`/EditDash/${user.id}`)}>Editar</a>
                                                        {"      "}
                                                        <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => HandleDelete(user.id)}>Eliminar</a>
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
