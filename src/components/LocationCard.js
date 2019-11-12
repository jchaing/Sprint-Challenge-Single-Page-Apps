import React from 'react';
import { Card } from 'reactstrap';

export default function LocationCard({ name, type, dimension, residents }) {
  console.log(residents);
  return (
    <div className="my-3">
      <Card>
        {/* <span>todo: location</span>; */}
        <h2>{name}</h2>
        <p>Type: {type}</p>
        <p>Dimension: {dimension}</p>
        {/* <p>Residents: {residents}</p> */}
      </Card>
    </div>
  );
}
