import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import style from "./Navbar.module.scss";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function NavScrollExample() {
  const navigate = useNavigate();

  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand
          className={`text-white ${style.link}`}
          onClick={() => navigate("/")}
        >
          Mama Recipes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "133px" }}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate("/")} className="text-white">
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/add-new-recipe")}
              className="text-white"
            >
              Add Recipe
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/profile")}
              className="text-white"
            >
              Profile
            </Nav.Link>
          </Nav>
          <Button
            onClick={() => navigate("/login")}
            variant="outline-light"
            className={style.imageUser}
          >
            <BiUserCircle size={25} /> <span>Login</span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
