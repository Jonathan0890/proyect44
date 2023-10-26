import React, { useState } from 'react';
import axios from 'axios';

const ChatGPTComponent = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handlePromptChange = (event) => {
        setPrompt(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/chat-gpt/send-message', { prompt });
            setResponse(res.data);
        } catch (error) {
            console.error('Hubo un error al obtener una respuesta:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="prompt">Ingrese su texto:</label>
                    <input
                        type="text"
                        id="prompt"
                        value={prompt}
                        onChange={handlePromptChange}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>

            {response && (
                <div>
                    <h3>Respuesta:</h3>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
};

export default ChatGPTComponent;
