import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header.js';
import Nav from './components/Nav';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';

export default function App() {
  return (
    <main>
      <Header />
      <Nav />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </main>
  );
}
