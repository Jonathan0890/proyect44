import React from 'react';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="w-14 h-[calc(100vh-52px)] border-r-1 border-gray">
            <ul className="list-none py-4 px-8">
                <li className="mb-4">
                    <NavLink
                        to="/"
                        exact
                        className="text-dark rounded py-2 w-full d-inlineblock px-3"
                        activeClassName="active"
                    >
                        <FaIcons.FaHome className="me-2" />
                        Inicio
                    </NavLink>
                </li>
                <li className="mb-4">
                    <NavLink
                        to="/registro"
                        exact
                        className="text-dark rounded py-2 w-full d-inlineblock px-3"
                        activeClassName="active"
                    >
                        <FaIcons.FaRegChartBar className="me-2" />
                        Ventas
                    </NavLink>
                </li>
                <li className="mb-4">
                    <NavLink
                        to="/formul"
                        exact
                        className="text-dark rounded py-2 w-full d-inlineblock px-3"
                        activeClassName="active"
                    >
                        <FaIcons.FaUsers className="me-2" />
                        Formulario
                    </NavLink>
                </li>
                <li className="mb-4">
                    <NavLink
                        to="/dashboard"
                        exact
                        className="text-dark rounded py-2 w-full d-inlineblock px-3"
                        activeClassName="active"
                    >
                        <FaIcons.FaJira className="me-2" />
                        Dashboard
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
