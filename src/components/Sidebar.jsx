import React from 'react'
import { NavLink } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import './../css/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <ul>
                <li>
                    <NavLink to="/" exact className="text-dark rounded py-2  w-100 d-inlineblock px-3" activeClassName="active">
                        <FaIcons.FaHome className="me-2" />
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/registro" exact className="text-dark rounded py-2 w-100 d-inlineblock px-3" activeClassName="active">
                        <FaIcons.FaRegChartBar className="me-2" />
                        Ventas
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/formul" exact className="text-dark rounded py-2 w-100 d-inlineblock px-3" activeClassName="active">
                        <FaIcons.FaUsers className="me-2" />
                       Formulario
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" exact className="text-dark rounded py-2 w-100 d-inlineblock px-3" activeClassName="active">
                        <FaIcons.FaJira className="me-2" />
                        Dashboard
                    </NavLink>
                </li>
                
            </ul>
        </div>
    )
}

export default Sidebar