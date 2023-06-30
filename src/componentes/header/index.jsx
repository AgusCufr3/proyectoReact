// eslint-disable-next-line no-unused-vars
import React from 'react';
import React from 'react'
import './styles.css'
import CartWidget from './cartWidget'
import ItemListContainer from './itemListContainer' 

const Header = ({titulo}) => {
	return (
		<header className='header'>
			<a href='#' className='titulo'>
				{titulo}
			</a>
			<input type='checkbox' className='hamMenu' id='hamMenu' />
			<label className='hamb' htmlFor='hamMenu'>
				<span className='lineaHamb'></span>
			</label>
			<ItemListContainer
				item='Objetivos || Logros'
				item2='Inicio'
				item3='Calendario interactivo'
			/>

			<CartWidget />
		</header>
	)
}

export default Header
