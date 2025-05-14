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
    <section className="Skills m-5 section" id="skills">
      <Container className="mt-5">
        <Row>
          <Col className="d-flex justify-content-center align-content-center">
            <h1 className="nameTag">Frameworks & Languages I've Used</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          {[FaReact, FaLaravel, FaVuejs, FaNodeJs, FaPython, FaJava].map(
            (IconComponent, index) => (
              <Col
                key={index}
                xs={12}
                md={6}
                xl={2}
                className="d-flex justify-content-center align-center"
              >
                <IconComponent
                  size={30}
                  className={`langIcon delay-${index}`}
                />
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};
