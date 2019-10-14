import React, { useState } from 'react';

export default function SearchForm() {
	const [term, setTerm] = useState('');

	const clickHandler = e => {
		e.preventDefault();
		setTerm(e.target.value);
		console.log(e);
	};

	return (
		<section className='search-form'>
			<form>
				<input
					type='text'
					className='input'
					id='addInput'
					placeholder='Enter your search term'
				/>
				<button type='submit' onClick={clickHandler}>
					search
				</button>
			</form>
		</section>
	);
}
