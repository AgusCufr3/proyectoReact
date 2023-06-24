// eslint-disable-next-line no-unused-vars
import React from 'react';
import './styles.css'; 

const Header = ({ titulo, itemMenu}) => {
    return (
        <header className = "header">
            <a href="#" className="titulo">{titulo}</a>
            <input type = "checkbox" className = "hamMenu" id = "hamMenu" />
            <label className = "hamb" htmlFor = "hamMenu">
                <span className = "lineaHamb"></span>
            </label>
            <nav className = "nav">
                <ul className = "menu">
                    <li><a href = "#">Objetivos || Logros</a></li>
                    <li><a href = "#">Inicio</a></li>
                    <li><a href = "#">Calendario interactivo</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;