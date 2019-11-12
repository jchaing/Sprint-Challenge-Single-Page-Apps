import React from "react";
import { Card, CardImg } from 'reactstrap';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Card>

        <CardImg
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </Card>
      </header>
    </section>
  );
}
