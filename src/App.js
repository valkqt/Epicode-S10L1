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
  const [commentText, setCommentText] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [loading, setLoading] = React.useState(false)

  const genre = window.location.pathname.split("/").pop();
  const selectedBooks = data[genre || "fantasy"].filter((book) =>
    book.title.includes(searchText)
  );

  function getComments(asin) {
    const endpoint = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments`;

    setLoading(true)

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
        setLoading(false)
      });
  }

  function addComment() {
    const newPost = {
      comment: commentText,
      rate: rating,
      elementId: `${currentAsin}`,
    };

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDZkY2I1MjViYjAwMThlZDA4MTAiLCJpYXQiOjE3MDQ3ODgyNzAsImV4cCI6MTcwNTk5Nzg3MH0.sIGkHZ6yOPihWNtqG6mC3s02nc5O-HTZcpnI45Dpj1I",
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => setComments([...comments, data]));
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
          <SidebarComp
            comments={comments}
            asin={currentAsin}
            onFormSubmit={addComment}
            textInput={setCommentText}
            ratingInput={setRating}
            loading={loading}
          />
        </div>
      </main>
    </>
  );
}

export default App;
