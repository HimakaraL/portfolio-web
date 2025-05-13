import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import codeImage from "../assets/github-octocat-svgrepo-com.svg";
import { useEffect, useState } from "react";

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
              <span className="nameTag">Welcome to my Portfolio</span>
              <h1>
                <span className="wrap">{text}</span>
              </h1>
              <p>Hi I'm Himakara, Connect with Me 👇</p>
            </Row>
            <Row className="mt-5">
              <Col xs={12} md={12} xl={12} className="d-flex justify-content-center">
                <button className="btn" onClick={() => console.log("connect")}>
                  Let's Connect
                </button>
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
