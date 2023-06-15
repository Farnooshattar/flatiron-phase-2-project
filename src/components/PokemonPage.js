import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6001/pokemon")
      .then((r) => r.json())
      .then((data) => {
        setCollection(data);
        console.log(data);
      });
  }, []);
  function searchedCard(searchedCard) {
    console.log("search", searchedCard)
    setCollection(collection.filter((card) => card.name === searchedCard));
  }
  function onAddPokemon(newPokemon){
    setCollection((precollection) => [...precollection, newPokemon])
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon = {onAddPokemon} />
      <br />
      <Search searchedCard={searchedCard} />
      <br />
      <PokemonCollection collection={collection} />
    </Container>
  );
}

export default PokemonPage;
