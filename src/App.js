import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header.js';
import Navi from './components/Navi';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import SearchForm from './components/SearchForm';

export default function App() {
  return (
    <main>
      <Header />
      <Navi />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationsList} />
      <Route path="/search" component={SearchForm} />
    </main>
  );
}
