// components/PokemonForm.js
import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {
  const [pokeData, setPokeData] = useState({
    name: "",

    frontUrl: "",
    backUrl: "",
  });

  function handleChange(event) {
    setPokeData({
      ...pokeData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newPokemon = {
      name: pokeData.name,

      sprites: {
        front: pokeData.frontUrl,
        back: pokeData.backUrl,
      },
    };

    fetch("http://localhost:6001/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((response) => response.json())
      .then((data) => {
        addPokemon(data);
        setPokeData({
          name: "",

          frontUrl: "",
          backUrl: "",
        });
      });
  }

  return (
    <div>
      <h2>Add a new cat!</h2>
      <h3 style={{ color: "gray" }}>
        "Try": Name:Peaky imageURL: https://cdn2.thecatapi.com/images/db9.gif
      </h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={pokeData.name}
            onChange={handleChange}
          />
          {/* <Form.Input
            fluid
            label="HP"
            placeholder="HP"
            name="hp"
            value={pokeData.hp}
            onChange={handleChange}
          /> */}
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="URL"
            name="frontUrl"
            value={pokeData.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="Description"
            name="backUrl"
            value={pokeData.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>
          <span className="logo" role="img">
            😺
          </span>
          Submit
        </Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
