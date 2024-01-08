import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SidebarComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Form.Group >
          <Form.Label>Add Comment!</Form.Label>
          <Form.Control className="my-3"></Form.Control>
          <Button variant="danger" type="submit">Submit</Button>
        </Form.Group>
        <hr />
        <div>
          {this.props.comments.map((comment) => {
            return (
              this.props && (
                <div
                  key={comment._id}
                  className="d-flex justify-content-between"
                >
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
}

export default SidebarComp;
