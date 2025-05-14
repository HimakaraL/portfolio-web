import { Container, Row, Col } from "react-bootstrap";
import {
  FaJava,
  FaLaravel,
  FaNodeJs,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";

export const Skills = () => {
  return (
    <section className="Skills m-5" id="skills">
      <Container className="mt-5">
        <Row>
          <Col className="d-flex justify-content-center align-content-center">
            <h1 className="nameTag">Frameworks & Languages I've Used</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col
            xs={12}
            md={6}
            xl={2}
            className="d-flex justify-content-center align-center"
          >
            <FaReact size={30} className="langIcon" />
          </Col>
          <Col
            xs={12}
            md={6}
            xl={2}
            className="d-flex justify-content-center align-center"
          >
            <FaLaravel size={60} className="langIcon" />
          </Col>
          <Col
            xs={12}
            md={6}
            xl={2}
            className="d-flex justify-content-center align-center"
          >
            <FaVuejs size={30} className="langIcon" />
          </Col>
          <Col
            xs={12}
            md={6}
            xl={2}
            className="d-flex justify-content-center align-center"
          >
            <FaNodeJs size={30} className="langIcon" />
          </Col>
          <Col
            xs={12}
            md={6}
            xl={2}
            className="d-flex justify-content-center align-center"
          >
            <FaPython size={30} className="langIcon" />
          </Col>
          <Col
            xs={12}
            md={6}
            xl={2}
            className="d-flex justify-content-center align-center"
          >
            <FaJava size={30} className="langIcon" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
