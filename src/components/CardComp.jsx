import React from "react";
import Card from "react-bootstrap/Card";
import css from "./css/CardComp.module.css";

function CardComp(props) {
      const highlighted = props.selected ? {outline: "2px solid red"} : undefined;


  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body
      style={highlighted}
        data-testid={'card'}
        onClick={ props.onClickComments}
      >
        <Card.Img variant="top" src={props.img} />

        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.genre}</Card.Text>
      </Card.Body>
    </Card>
  );

}

export default CardComp;
