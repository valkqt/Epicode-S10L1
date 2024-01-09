import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function SidebarComp(props) {
  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.onFormSubmit();
          e.target.reset();
        }}
      >
        <Form.Group>
          <Form.Label>Add Comment!</Form.Label>
          <Form.Control
            className="my-3"
            placeholder="write a comment"
            onChange={(e) => props.textInput(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="d-flex justify-content-around">
          <Form.Check
            type="radio"
            label={"1"}
            value={"1"}
            name={"rating"}
            onClick={(e) => props.ratingInput(e.target.value)}
          />
          <Form.Check
            type="radio"
            label={"2"}
            value={"2"}
            name={"rating"}
            onClick={(e) => props.ratingInput(e.target.value)}
          />
          <Form.Check
            type="radio"
            label={"3"}
            value={"3"}
            name={"rating"}
            onClick={(e) => props.ratingInput(e.target.value)}
          />
          <Form.Check
            type="radio"
            label={"4"}
            value={"4"}
            name={"rating"}
            onClick={(e) => props.ratingInput(e.target.value)}
          />
          <Form.Check
            type="radio"
            label={"5"}
            value={"5"}
            name={"rating"}
            onClick={(e) => props.ratingInput(e.target.value)}
          />
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
                {props.loading && <Spinner variant="danger d-block"/>}
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
