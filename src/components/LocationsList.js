import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(res => {
        const getLocations = res.data.results;
        setLocations([...getLocations]);
        console.log(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {locations.map(location => (
        <LocationCard
          key={location.id}
          name={location.name}
          type={location.type}
          dimension={location.dimension}
          residents={location.residents}
        />
      ))}
    </div>
  );
}
