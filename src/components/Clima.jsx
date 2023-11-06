import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

export default function TablaAtmo() {
    const [datos, setDatos] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [selectedState, setSelectedState] = useState(''); // Paso 2
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.datos.gob.mx/v1/condiciones-atmosfericas');
                setDatos(response.data.results);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };
        fetchData();
    }, []);

    const estados = [...new Set(datos.map((dato) => dato.state))]; 

    const totalDatos = datos.length;
    const pageCount = Math.ceil(totalDatos / itemsPerPage);
    const adjustedPageNumber = Math.min(pageNumber, pageCount - 1);

    const startIndex = adjustedPageNumber * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    
    const filteredDatos = datos.filter((dato) => {
        return selectedState === '' || dato.state === selectedState;
    });

    
    const handlePageClick = (data) => {
        setPageNumber(data.selected);
    };

    return (
        <div>
            
            <div className="container">
                <br/>
                <h1 className='text-gray-700 font-bold text-4xl text-center '>CLIMA DE MÉXICO</h1>
                <div className="relative top-24 ">
                    <label htmlFor="stateSelect" className='font-semibold text-white bg-slate-500 rounded-tl-lg rounded-bl-lg text-xl ml-4 px-2 '>ESTADO </label> 
                    <select
                        id="stateSelect" 
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className='bg-black text-white rounded-tr-lg rounded-br-lg text-xl'
                    >
                        <option value="">Selecciona</option>
                        {estados.map((estado) => (
                            <option key={estado} value={estado}>
                                {estado}
                            </option>
                        ))}
                    </select>
                    <br/>
                    <br/>
                    <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
                        <thead className="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                                <th scope="col" className="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ciudad ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Fecha válida utc
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Dirección del viento cardinal
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Probabilidad de precipitación
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Humedad relativa
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nombre
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Longitud
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Estado
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    último informe
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Descripción del cielo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Abreviatura del estado
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tempc
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Latitud
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Código de icono
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Velocidad del viento Km
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredDatos.slice(startIndex, endIndex).map((dato, index) => (
                                <tr
                                    key={index}
                                    className={`border-b dark:border-gray-700 ${index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                                >
                                    <td className="px-6 py-4">{startIndex + index + 1}</td>
                                    <td className="px-6 py-4">
                                        {dato.cityid}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dato.validdateutc}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dato.winddirectioncardinal}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dato.probabilityofprecip}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dato.relativehumidity}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dato.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dato.longitude}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dato.state}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dato.lastreporttime}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dato.skydescriptionlong}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dato.stateabbr}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dato.tempc}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dato.latitude}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dato.iconcode}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dato.windspeedkm}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    <ReactPaginate
                        previousLabel="Anterior"
                        nextLabel="Siguiente"
                        breakLabel="..."
                        breakClassName="break-me"
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName="flex justify-center items-center"
                        pageClassName="cursor-pointer mr-2 p-2 border border-gray-300"
                        activeClassName="bg-blue-500 text-white"
                        previousClassName="mr-2 p-2 border border-gray-300 cursor-pointer"
                        nextClassName="mr-2 p-2 border border-gray-300 cursor-pointer"
                    />
                </div>
            </div>
            </div>
    );
}