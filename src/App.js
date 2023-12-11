import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./App.css"
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Mon projet React</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Card body><h3 className="monh">Voici mon projet React avec un titre,3 cards et une Navbar</h3></Card>
      <div className="nono">
        <Card style={{ width: "18rem", height: "545px", marginLeft: "300px" }}>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/71p-M3sPhhL.jpg"
          />
          <Card.Body>
            <Card.Title>HP dragon</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Pour plus cliquer sur les liens ci-dessous😍
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "545px", marginLeft: "300px" }}>
          <Card.Img
            variant="top"
            src="https://content.pearl.fr/media/cache/default/article_ultralarge_high_nocrop/shared/images/articles/T/TG2/souris-gaming-sans-fil-xpert-m600-ref_TG2195_2.jpg"
          />
          <Card.Body>
            <Card.Title>HP dragon</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Pour plus cliquer sur les liens ci-dessous😍
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", height: "545px", marginLeft: "300px" }}>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/61SygRUmCAL._AC_UF1000,1000_QL80_.jpg"
          />
          <Card.Body>
            <Card.Title>HP dragon</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Pour plus cliquer sur les liens ci-dessous😍
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
