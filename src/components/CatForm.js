// components/PokemonForm.js
import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function CatForm({ addCat }) {
  const [catData, setCatData] = useState({
    name: "",

    url: "",
    comment: "",
  });

  function handleChange(event) {
    setCatData({
      ...catData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newCat = {
      name: catData.name,

      url: catData.url,
      comment: catData.comment,
    };

    fetch("http://localhost:6001/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCat),
    })
      .then((response) => response.json())
      .then((data) => {
        addCat(data);
        setCatData({
          name: "",

          url: "",
          comment: "",
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
            value={catData.name}
            onChange={handleChange}
          />

          <Form.Input
            fluid
            label="Image URL"
            placeholder="URL"
            name="url"
            value={catData.url}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Comment"
            placeholder="Comment"
            name="comment"
            value={catData.comment}
            onChange={handleChange}
          />
          {/* <Form.Input
            fluid
            label="Back Image URL"
            placeholder="Description"
            name="backUrl"
            value={catData.backUrl}
            onChange={handleChange}
          /> */}
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

export default CatForm;
