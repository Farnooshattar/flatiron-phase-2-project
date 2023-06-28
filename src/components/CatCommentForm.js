import React, { useState } from "react";
import { Form } from "semantic-ui-react";
//you can change the info about a cat
function CatCommentForm({ id }) {
  const [catComment, setcatComment] = useState({
    comment: "",
  });

  function handleChange(event) {
    setcatComment({
      ...catComment,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(catComment);

    console.log(id);
    fetch(`https://cats-json-database.onrender.com/cats/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(catComment),
    }).then((response) => response.json());
  }

  return (
    <div>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Update cat's info"
            placeholder="type here"
            name="comment"
            value={catComment.comment}
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

export default CatCommentForm;
