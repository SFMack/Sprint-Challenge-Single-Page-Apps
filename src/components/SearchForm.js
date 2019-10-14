import React, { useState } from 'react';

export default function SearchForm() {
	return (
		<section className='search-form'>
			<input
				type='text'
				className='input'
				id='addInput'
				placeholder='Enter your search term'
			/>
		</section>
	);
}
