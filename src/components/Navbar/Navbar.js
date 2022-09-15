import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import style from "./Navbar.module.scss";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser, reset } from "../../redux/features/user/userSlice";
import { resetLoggedUser } from "../../redux/features/auth/authSlice";
import { useEffect } from "react";
import Swal from "sweetalert2";

function NavScrollExample() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.auth.user);
  const userProfile = useSelector((state) => state.user.user);
  const message = useSelector((state) => state.user);

  // console.log("user auth", dataUser);

  const body = {
    config: {
      headers: {
        Authorization: `Bearer ${dataUser?.token}`,
      },
    },
    id: dataUser?.data?.id,
  };

  useEffect(() => {
    dispatch(getUser(body));
    if (message?.message === "jwt expired") {
      dispatch(reset());
      dispatch(resetLoggedUser());
      Swal.fire({
        icon: "info",
        text: "Your session has expired, please log in again",
        confirmButtonText: "Login",
        cancelButtonText: "later",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("login");
        } else {
          navigate("/");
        }
      });
    }
  }, [dispatch, message?.message]);

  const handleLogout = async () => {
    await dispatch(reset());
    await dispatch(resetLoggedUser());
    Swal.fire("Logout Success");
  };

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
          {!userProfile?.length ? (
            <Button
              onClick={() => navigate("/login")}
              variant="outline-light"
              className={style.imageUser}
            >
              <BiUserCircle size={25} /> <span>login</span>
            </Button>
          ) : (
            <Button
              onClick={handleLogout}
              variant="outline-light"
              className={style.imageUser}
            >
              <BiUserCircle size={25} /> <span>Logout</span>
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
