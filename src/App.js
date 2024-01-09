import "./App.css";
import React from "react";
import data from "./data/books.json";
import NavComp from "./components/NavComp.jsx";
import Jumbotron from "./components/Jumbotron.jsx";

import SidebarComp from "./components/SidebarComp.jsx";
import CardComp from "./components/CardComp.jsx";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [searchText, setSearchText] = React.useState("");
  const [comments, setComments] = React.useState([]);
  const [currentAsin, setcurrentAsin] = React.useState("");

  const genre = window.location.pathname.split("/").pop();
  const selectedBooks = data[genre || "fantasy"].filter((book) =>
    book.title.includes(searchText)
  );

  function getComments(asin) {
    const endpoint = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments`;

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
        console.log(data);
        setComments(data);
      });
  }

  return (
    <>
      <Container as={"header"} fluid className="bg-secondary-subtle">
        <NavComp
          searchText={searchText}
          onSearchChange={(e) => setSearchText(e.target.value)}
        />
      </Container>
      <Jumbotron />

      <main>
        <div className="booksContainer">
          {selectedBooks.map((book) => {
            return (
              <CardComp
                key={book.asin}
                img={book.img}
                title={book.title}
                asin={book.asin}
                selected={book.asin === currentAsin}
                onClickComments={() => {
                  getComments(book.asin);
                  setcurrentAsin(book.asin);
                }}
              />
            );
          })}
        </div>
        <div className="commentsSidebar">
          <SidebarComp comments={comments} asin={currentAsin} />
        </div>
      </main>
    </>
  );
}

export default App;
