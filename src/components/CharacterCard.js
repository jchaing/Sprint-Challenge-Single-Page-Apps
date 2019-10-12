import React from 'react';

export default function CharacterCard({
  image,
  name,
  status,
  species,
  origin,
  location
}) {
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Origin: {origin}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
}
