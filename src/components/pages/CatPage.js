import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PokemonCollection from "../PokemonCollection";
import PokemonForm from "../PokemonForm";
import Search from "../Search";
import { Container } from "semantic-ui-react";

function CatPage() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/cats")
      .then((response) => response.json())
      .then((data) => setCollection(data));
  }, []);

  function addPokemon(newPokemon) {
    setCollection((prevCollection) => [newPokemon, ...prevCollection]);
  }

  function searchCard(searchedCard) {
    const filteredCollection = collection.filter(
      (card) => card.name === searchedCard
    );
    setCollection(filteredCollection);
  }
  const deleteFromScreen = (itemId) => {
    setCollection(collection.filter((item) => itemId !== item.id));
  };

  return (
    <Container style={{ color: "white" }}>
      <br />
      <Search searchCard={searchCard} />
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Link style={{ fontWeight: "bold" }} to="/">
        Go to Home Page
      </Link>
      <br />
      <br />
      <br />
      <PokemonCollection
        collection={collection}
        deleteFromScreen={deleteFromScreen}
      />
    </Container>
  );
}

export default CatPage;
