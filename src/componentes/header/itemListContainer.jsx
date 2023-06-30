import React from 'react';

const itemListContainer = ({ item, item2, item3 }) => {
    return (
        <nav className="nav">
            <ul className="menu">
                <li><a href="#">{item}</a></li>
                <li><a href="#">{item2}</a></li>
                <li><a href="#">{item3}</a></li>
            </ul>
        </nav>
    
    );
};

export default itemListContainer;