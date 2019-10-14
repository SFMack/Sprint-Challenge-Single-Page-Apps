import React, { useEffect, useState } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
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
				setState(response.data.results);
			})
			.catch(error => {
				console.log('Error fetching and parsing data', error);
			});
	}, [state]);

	console.log(state);

	return (
		<section className='character-list'>
			{state.map(char => {
				return (
					<Card key={char.id}>
						<CardImg
							top
							width='25%'
							src={char.image}
							alt='Image of character'
						/>
						<CardBody>
							<CardTitle>{char.name}</CardTitle>
							<CardText>Status: {char.status}</CardText>
							<CardText>Species: {char.species}</CardText>
							<CardText>Location: {char.location.name}</CardText>
						</CardBody>
					</Card>
				);
			})}
		</section>
	);
}
