import React from "react";
import CatCard from "./CatCard";
import { Card } from "semantic-ui-react";

function CatCollection({ collection, deleteFromScreen }) {
  return (
    <Card.Group itemsPerRow={3}>
      {collection.map((card, index) => (
        <CatCard key={index} card={card} deleteFromScreen={deleteFromScreen} />
      ))}
    </Card.Group>
  );
}

export default CatCollection;
