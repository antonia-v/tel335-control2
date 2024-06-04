import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchPage from "./components/SearchPage";
import FavoritesPage from "./components/FavoritesPage";

function App() {
  const [home, setHome] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand>Chuck Norris Facts</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={()=> setHome(1)}>Search Facts</Nav.Link>
                <Nav.Link onClick={()=> setHome(0)}>Favorites</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {(home? <SearchPage /> : <FavoritesPage />)}
      </header>
    </div>
  );
}

export default App;
