import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function CommentForm({ id }) {
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
    // const newComment = {
    //   comment: catComment.comment,
    // };
    console.log(id);
    fetch(`http://localhost:6001/cats/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(catComment),
    })
      .then((response) => response.json())
      .then((data) => {
        //addComment(data);
        // setcatComment({
        //   name: "",
        //   frontUrl: "",
        //   backUrl: "",
        // });
      });
  }

  return (
    <div>
      <h2>Add a new comment!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Comment"
            placeholder="Comment"
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

export default CommentForm;
