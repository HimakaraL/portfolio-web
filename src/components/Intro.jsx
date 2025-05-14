import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import codeImage from "../assets/github-octocat-svgrepo-com.svg";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Intro = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const toCycle = [
    "Web Developer",
    "Software Engineer",
    "Full Stack Developer",
  ];
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toCycle.length;
    let fullText = toCycle[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="Banner m-5" id="home">
      <Container>
        <Row className="">
          <Col xs={12} md={6} xl={7} className="mt-5">
            <Row>
              <span className="nameTag">Bonjour! I'm Himakara</span>
              <h1>
                <span className="wrap">{text}</span>
              </h1>
            </Row>
            <Row className="mt-5 d-flex justify-content-center align-items-center">
              <Col
                xs={12}
                md={12}
                xl={12}
                className="d-flex justify-content-center flex-column mt-5"
              >
                <p>Connect with Me 👇</p>
                <a
                  href="https://www.linkedin.com/in/heshan-himakara-b4a42223a/"
                  className="btn mb-5 d-flex justify-content-center align-items-center"
                >
                  Let's Connect{" "}
                  <span className="mx-3 btn-icon">
                    <FaExternalLinkAlt />
                  </span>
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={codeImage} alt="headerImg" className="gitImage" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
