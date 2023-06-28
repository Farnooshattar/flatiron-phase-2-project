import React, { useState } from "react";
import { Form } from "semantic-ui-react";

// Component for adding a cat with the provided information
function CatAddForm({ addCat }) {
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

    // Send a POST request to the server with the new cat data
    fetch("https://cats-json-database.onrender.com/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCat),
    })
      .then((response) => response.json())
      .then((data) => {
        // Call the addCat function passed as a prop to update the collection with the new cat
        addCat(data);

        // Reset the cat data inputs after successful submission
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

export default CatAddForm;
