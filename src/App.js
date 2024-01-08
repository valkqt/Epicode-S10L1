import "./App.css";
import React from "react";
import data from "./data/books.json";
import NavComp from "./components/NavComp.jsx";
import SidebarComp from "./components/SidebarComp.jsx";
import CardComp from "./components/CardComp.jsx";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "", comments: [], currentAsin: ""};
    this.handleChange = this.handleChange.bind(this);
    this.getComments = this.getComments.bind(this)
  }

  handleChange(e) {
    this.setState({ ...this.state, searchText: e.target.value });
  }

  getComments(asin) {
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
        console.log(data)
        this.setState({...this.state, comments: data})
      });

  }



  render() {
    return (
      <>
        <Container as={"header"} fluid className="bg-secondary-subtle">
          <NavComp
            searchText={this.state.searchText}
            onSearchChange={this.handleChange}
          />
        </Container>
        <main>
          {/* books */}
          <div className="booksContainer">
            {data.fantasy.map((book) => {
              return (
                <CardComp
                  key={book.asin}
                  img={book.img}
                  title={book.title}
                  asin={book.asin}
                  selected={book.asin === this.state.currentAsin}
                  onClickComments={() => {
                    this.getComments(book.asin); 
                    this.setState({...this.state, currentAsin: book.asin})
                  }}
                />
              );
            })}
          </div>
          {/* sidebar with comments */}
          <div className="commentsSidebar">
            <SidebarComp comments={this.state.comments}/>
          </div>
        </main>
      </>
    );
  }
}

export default App;
