import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TMDB() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // URL de la API
        const apiUrl = 'http://api.themoviedb.org/2.1';

        // Clave de API
        const apiKey = 'dc79cc21fee12449063d8edea3049351';  // Reemplaza 'tu_clave_de_api' por tu clave real

        // Realizar una solicitud GET a la API incluyendo la clave de API en los encabezados
        axios.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        })
            .then(function (response) {
                // Verificar si la solicitud fue exitosa
                if (response.status === 200) {
                    const responseData = response.data; // Los datos de respuesta de la API
                    setData(responseData); // Actualizar el estado con los datos
                } else {
                    console.log(`Error ${response.status}: No se pudo acceder a la API`);
                }
            })
            .catch(function (error) {
                console.error('Error al hacer la solicitud a la API:', error);
            });
    }, []); // El segundo argumento [] indica que este efecto se ejecutará solo una vez al cargar el componente

    return (
        <div>
            {/* Renderizar los datos en JSX */}
            {data && (
                <div>
                    <h1>Datos de la API:</h1>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default TMDB;
