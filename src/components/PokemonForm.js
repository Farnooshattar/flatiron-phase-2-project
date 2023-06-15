import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {
  const [pokeData, setPokeData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  });

  function handleChange(event) {
    setPokeData({
      ...pokeData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitting form...", e);
          console.log("change", pokeData);
          const newPokemon = {
            name: pokeData.name,
            hp: pokeData.hp,
            sprites: { front: pokeData.frontUrl, back: pokeData.backUrl },
          };
          console.log("sprites", newPokemon.sprites);
          fetch("http://localhost:6001/pokemon", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newPokemon),
          });
          addPokemon(newPokemon);
        }}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={pokeData.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={pokeData.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokeData.front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokeData.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
