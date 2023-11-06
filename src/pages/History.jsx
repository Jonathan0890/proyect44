import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar"

const History = () => {
  const { pathname } = useLocation();

  // Utiliza el estado local para almacenar el historial de navegación.
  const [history, setHistory] = React.useState([]);

  // Agrega la ruta actual al historial.
  React.useEffect(() => {
    setHistory([...history, pathname]);
  }, [pathname]);

  return (<>
    <Navbar/>
    <div className="history">
      <h2>Historial de Navegación</h2>
      <ul>
        {history.map((path, index) => (
          <li key={index}>
            <Link to={path}>{path}</Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default History;