import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function SearchForm(props) {
	const [characterList, setCharacterList] = useState('');
	const [searchTerm, setSearchTerm] = useState('');
	const [search, setSearch] = useState([]);
	const [filteredList, setFilteredList] = useState([]);

	const submitHandler = e => {
		e.preventDefault();
		setSearch(searchTerm);
		console.log(characterList);
		console.log(searchTerm);
	};

	const changeHandler = e => {
		const { value } = e.target;
		setSearchTerm(value);
	};

	const Button = styled.button`
		border-radius: 3px;
		padding: 0.5rem 1.5rem;
		margin: 0.5rem 1rem;
		width: 5rem;
		background: transparent;
		color: green;
		border: 2px solid green;
	`;

	useEffect(() => {
		setCharacterList(props);
		console.log(characterList);
	}, []);

	return (
		<section className='search-form'>
			<form onSubmit={submitHandler}>
				<input
					type='text'
					className='input'
					id='addInput'
					placeholder='Enter your search term'
					onChange={changeHandler}
				/>
				<Button type='submit'>search</Button>
			</form>
		</section>
	);
}
