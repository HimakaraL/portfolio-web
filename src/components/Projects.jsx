import Card from "react-bootstrap/Card";
import MernImg from "../assets/mern.png";
import dwbiImg from "../assets/dwbi.png";
import ionicImg from "../assets/ionic.png";
import laImg from "../assets/la.png";
import { Container, Row, Col } from "react-bootstrap";

export const Projects = () => {
  return (
    <section className="Projects">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-content-center mt-5">
            <h1 className="nameTag">Projects</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12} md={6} xl={3} className="mt-2">
            <Card className="project-card">
              <Card.Img variant="top" src={MernImg} className="project-img" />

              <Card.Body className="project-body">
                <Card.Title className="project-title">
                  Business Management System using MERN Stack
                </Card.Title>
              </Card.Body>

              <Card.Body className="project-body link-body">
                <Card.Link
                  href="https://github.com/HimakaraL/itp-project-2024-mern"
                  target="_blank"
                  className="project-link"
                >
                  View on GitHub
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} xl={3} className="mt-2">
            <Card className="project-card">
              <Card.Img variant="top" src={laImg} className="project-img" />

              <Card.Body className="project-body">
                <Card.Title className="project-title">
                  PHP Laravel App
                </Card.Title>
              </Card.Body>
    
              <Card.Body className="project-body link-body">
                <Card.Link
                  href="https://github.com/HimakaraL/php-laravel-crud"
                  target="_blank"
                  className="project-link"
                >
                  View on GitHub
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} xl={3} className="mt-2">
            <Card className="project-card">
              <Card.Img variant="top" src={ionicImg} className="project-img" />

              <Card.Body className="project-body">
                <Card.Title className="project-title">Ionic App</Card.Title>
              </Card.Body>

              <Card.Body className="project-body link-body">
                <Card.Link
                  href="https://github.com/HimakaraL/ionic-app"
                  target="_blank"
                  className="project-link"
                >
                  View on GitHub
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} xl={3} className="mt-2">
            <Card className="project-card">
              <Card.Img variant="top" src={dwbiImg} className="project-img" />

              <Card.Body className="project-body">
                <Card.Title className="project-title">
                  Data Warehouse and Business Intelligence Project
                </Card.Title>
              </Card.Body>

              <Card.Body className="project-body link-body">
                <Card.Link
                  href="https://github.com/HimakaraL/dwbi-project"
                  target="_blank"
                  className="project-link"
                >
                  View on GitHub
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
