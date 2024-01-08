import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from "react-bootstrap/Form";


function Navweh({ searchText, onSearchChange }) {
    return (
      <Navbar expand="lg" className="bg-info-subtle">
        <Container>
          <Navbar.Brand href="#">Briccolibrary</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="fantasy">Fantasy</Nav.Link>
              <Nav.Link href="history" >History</Nav.Link>
              <Nav.Link href="scifi" >Sci-fi</Nav.Link>
              <Nav.Link href="horror" >Horror</Nav.Link>
              <Nav.Link href="romance" >Romance</Nav.Link>
  
            </Nav>
            <Form>
              <Form.Group>
                <Form.Control
                  type="search"
                  value={searchText}
                  placeholder="write some stuff"
                  id="search"
                  name="search"
                  onChange={onSearchChange}
                />
              </Form.Group>
            </Form>
          </Navbar.Collapse>
      
        </Container>
      </Navbar>
    );
  }
  
  export default Navweh;