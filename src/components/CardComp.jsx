import React from "react";
import Card from "react-bootstrap/Card";
import css from "./css/CardComp.module.css";

class CardComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: false };
  }

  toggleSelection() {
    this.setState({ ...this.state, selected: !this.state.selected });
  }

  getComments() {
    const endpoint = `https://striveschool-api.herokuapp.com/api/books/${this.props.asin}/comments`;

    fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDZkY2I1MjViYjAwMThlZDA4MTAiLCJpYXQiOjE3MDMxNjc3MDgsImV4cCI6MTcwNDM3NzMwOH0.l4fV6snHiO-tkwpEqB097J3Iz9Oq0FclCxXsVKE_6aw",
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      });
  }


  render() {
    const selected = this.props.selected ? css.selected : undefined;

    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body
          className={selected}
          onClick={
            // this.toggleSelection(e);
            this.props.onClickComments
          }
        >
          <Card.Img variant="top" src={this.props.img} />

          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.genre}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default CardComp;
