import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// import '@fontsource/poppins';
// import '@fontsource/poppins/300.css';
// import '@fontsource/poppins/600.css';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand>
          <img className="brand-logo" src={logo} alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-3">
            <Nav.Link
              href="../docs/CV.pdf"
              download="Himakara_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={
                activeLink === "home" ? "active-navbar-link" : "navbar-link"
              }
            >
              My CV
            </Nav.Link>
            {/* <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => changeActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => changeActiveLink("projects")}
            >
              Projects
            </Nav.Link> */}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/HimakaraL">
                <FaGithub size={50} color="white" />
              </a>
              {/* <a href="#">
                <FaLinkedin size={30} color="white" />
              </a> */}
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
