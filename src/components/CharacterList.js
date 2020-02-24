import React, { useEffect, useState } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import SearchForm from './SearchForm.js';
import axios from 'axios';

export default function CharacterList() {
	const [characters, setCharacters] = useState('');

	useEffect(() => {
		axios
			.get('https://rickandmortyapi.com/api/character/')
			.then(res => {
				const { results } = res.data;
				setCharacters(results);
				console.log(results);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<>
			<section>
				<SearchForm characters={characters} />
			</section>
			<section className='character-list'>
				{characters.length > 0
					? characters.map(char => {
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
					  })
					: null}
			</section>
		</>
	);
}
