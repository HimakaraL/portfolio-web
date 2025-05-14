import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export const About = () => {
  return (
    <section className="about-section py-5" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col
            md={10}
            lg={8}
            className="d-flex justify-content-center align-items-center flex-column mt-5"
          >
            <h2 className="text-center mb-4 nameTag">About Me</h2>
            <p className="about-text">
              I'm <strong>Heshan Himakara</strong>, a passionate Software
              Engineer and Fullstack Developer with 1+ years of industry
              experience.
            </p>
            <p className="about-text">
              I’ve worked with a variety of technologies including MERN Stack,
              Laravel, Java Spring, Python for Data Science, Ionic, Kotlin,
              Unity, and Power BI.
            </p>
            <p className="about-text">
              Some of my recent projects include stock market prediction apps,
              CRUD systems, data dashboards, and mobile apps. You’ll find
              examples of them above in my portfolio section.
            </p>
            <p className="about-text">
              Thanks for stopping by — and feel free to check out my CV from the
              link above!
            </p>
          </Col>
        </Row>

        <Row className="mt-5 justify-content-center d-flex ">
          <Col
            xs={12}
            md={6}
            xl={2}
            className="d-flex justify-content-center align-center"
            onClick={() => {
              window.location.href =
                "mailto:himakaral@outlook.com?subject=Hello&body=I would like to contact you.";
            }}
          >
            <FaEnvelope size={60} className="btnBottom" />
          </Col>
          <Col
            xs={12}
            md={6}
            xl={2}
            className="d-flex justify-content-center align-center"
                        onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/himakaral";
            }}
          >
            <FaLinkedin size={60} className="btnBottom" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
