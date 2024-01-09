import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SidebarComp(props) {
  const [comment, setComment] = React.useState("");
  const [rating, setRating] = React.useState("");

  function addComment() {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDZkY2I1MjViYjAwMThlZDA4MTAiLCJpYXQiOjE3MDQ3ODgyNzAsImV4cCI6MTcwNTk5Nzg3MH0.sIGkHZ6yOPihWNtqG6mC3s02nc5O-HTZcpnI45Dpj1I",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        comment: comment,
        rate: rating,
        elementId: `${props.asin}`,
      }),
    });
  }

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addComment();
          e.target.reset();
        }}
      >
        <Form.Group>
          <Form.Label>Add Comment!</Form.Label>
          <Form.Control
            className="my-3"
            placeholder="write a comment"
            onChange={(e) => setComment(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="d-flex justify-content-around">
          <Form.Check
            type="radio"
            label={"1"}
            value={"1"}
            name={"rating"}
            onClick={(e) => setRating(e.target.value)}
          />
          <Form.Check
            type="radio"
            label={"2"}
            value={"2"}
            name={"rating"}
            onClick={(e) => setRating(e.target.value)}
          />
          <Form.Check
            type="radio"
            label={"3"}
            value={"3"}
            name={"rating"}
            onClick={(e) => setRating(e.target.value)}
          />
          <Form.Check
            type="radio"
            label={"4"}
            value={"4"}
            name={"rating"}
            onClick={(e) => setRating(e.target.value)}
          />
          <Form.Check
            type="radio"
            label={"5"}
            value={"5"}
            name={"rating"}
            onClick={(e) => setRating(e.target.value)}
          />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
      <hr />
      <div>
        {props.comments.map((comment) => {
          return (
            props && (
              <div key={comment._id} className="d-flex justify-content-between">
                <p>{comment.comment}</p>
                <p>{comment.rate}</p>
              </div>
            )
          );
        })}
      </div>
    </>
  );
}

export default SidebarComp;
