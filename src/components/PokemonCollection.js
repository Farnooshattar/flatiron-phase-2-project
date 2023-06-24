import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import { Route } from "react-router-dom";

function PokemonCollection({ collection, deleteFromScreen }) {
  return (
    <Card.Group itemsPerRow={3}>
      {collection.map((card, index) => (
        <PokemonCard
          key={index}
          card={card}
          deleteFromScreen={deleteFromScreen}
        />
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;
