import React, { useState } from 'react';
import styled from 'styled-components';

export default function SearchForm() {
	const [term, setTerm] = useState('');

	const clickHandler = e => {
		e.preventDefault();
		setTerm(e.target.value);
		console.log(e);
	};

	const Button = styled.a`
		/* This renders the buttons above... Edit me! */
		border-radius: 3px;
		padding: 0.5rem 1.5rem;
		margin: 0.5rem 1rem;
		width: 5rem;
		background: transparent;
		color: green;
		border: 2px solid green;
	`;

	return (
		<section className='search-form'>
			<form>
				<input
					type='text'
					className='input'
					id='addInput'
					placeholder='Enter your search term'
				/>
				<Button type='submit' onClick={clickHandler}>
					search
				</Button>
			</form>
		</section>
	);
}
