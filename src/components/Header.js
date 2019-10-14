import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<header className='ui centered'>
			<h1 className='ui center'>Rick &amp; Morty Fan Page</h1>
			<button>
				<NavLink to='/'>Home</NavLink>
			</button>
			<button>
				<NavLink to='/characters'>Characters</NavLink>
			</button>
		</header>
	);
}
