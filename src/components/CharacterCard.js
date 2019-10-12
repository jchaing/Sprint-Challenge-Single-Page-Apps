import React from 'react';
import {
  Card,
  CardImg,
  Row,
  Col
} from 'reactstrap';

export default function CharacterCard({
  image,
  name,
  status,
  species,
  origin,
  location
}) {
  return (
    <Row className="my-3">
      <Col sm="6">

      <Card body>
          <CardImg top width="300px" src={image} alt={name} />
          </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <h2>{name}</h2>
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Origin: {origin}</p>
          <p>Location: {location}</p>
        </Card>
      </Col>
    </Row>
  );
}
