import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CharacterList(props) {
	// TODO: Add useState to track data from useEffect
	const [state, setState] = useState([]);

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
		axios
			.get('https://rickandmortyapi.com/api/character/')
			.then(response => {
				console.log(state);
				return setState(response.data.results);
			})
			.catch(error => {
				console.log('Error fetching and parsing data', error);
			});
	}, [state]);

	return (
		<section className='character-list'>
			<h2>
				{state.map(char => {
					return (
						<div className='character' key={char.id}>
							Name: {char.name}
						</div>
					);
				})}
			</h2>
		</section>
	);
}
