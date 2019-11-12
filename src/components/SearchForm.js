import React, { useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Form, FormGroup } from 'reactstrap';

export default function SearchForm() {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [error, setError] = useState('');

  const handleInput = e => {
    setError('');
    const input = e.target.value;
    setSearchName(input);
    console.log(searchName);
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${searchName}`)
      .then(res => {
        const getCharacters = res.data.results;
        setCharacters(getCharacters);
        console.log(getCharacters);
      })
      .catch(err => {
        setError('No Character Found. Search again');
        console.log(err);
        setCharacters([]);
      });
  };

  const resetInput = () => {
    const input = document.querySelector('input');
    input.value = '';
  }

  const returnChars =
    characters.length === 0 ? (
      <p>Enter a character name</p>
    ) : (
      characters.map(character => (
        <CharacterCard
          key={character.id}
          image={character.image}
          name={character.name}
          status={character.status}
          species={character.species}
          origin={character.origin.name}
          location={character.location.name}
        />
      ))
    );

  return (
    <div>
      <section className="search-form">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <input
              autoFocus={true}
              type="text"
              name="charName"
              placeholder="Search Character Name"
              onChange={handleInput}
            />
            <button type="submit" onClick={resetInput}>search</button>
          </FormGroup>
        </Form>
      </section>
      {error ? error : returnChars}
    </div>
  );
}
