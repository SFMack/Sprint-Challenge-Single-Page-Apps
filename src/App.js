import React from 'react';
import Header from './components/Header.js';
import { Route } from 'react-router-dom';
import CharacterList from './components/CharacterList.js';
import WelcomePage from './components/WelcomePage.js';
import SearchForm from './components/SearchForm.js';

export default function App() {
	return (
		<main>
			<Header />
			<SearchForm />
			<Route exact path='/' component={WelcomePage} />
			<Route exact path='/characters' component={CharacterList} />
		</main>
	);
}
