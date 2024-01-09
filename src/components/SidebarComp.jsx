import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function SidebarComp(props) {
  const [commentText, setCommentText] = React.useState("");
  const [rating, setRating] = React.useState("");
  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.onFormSubmit(commentText, rating);
          e.target.reset();
        }}
      >
        <Form.Group>
          <Form.Label>Add Comment!</Form.Label>
          <Form.Control
            className="my-3"
            placeholder="write a comment"
            onChange={(e) => setCommentText(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="d-flex justify-content-around">
          {[1, 2, 3, 4, 5].map((value) => {
            return (
              <Form.Check
                key={value}
                type="radio"
                label={value}
                value={value}
                name={"rating"}
                onClick={() => setRating(value)}
              />
            );
          })}
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
      <hr />
      <div>
        {props &&
          props.comments.map((comment) => {
            return (
              <Fragment key={comment._id}>
                {props.loading && <Spinner variant="danger d-block" />}
                {!props.loading && (
                  <div className="d-flex justify-content-between">
                    <p>{comment.comment}</p>
                    <p>{comment.rate}</p>
                  </div>
                )}
              </Fragment>
            );
          })}
      </div>
    </>
  );
}

export default SidebarComp;
