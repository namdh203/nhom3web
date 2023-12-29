import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DurationCard from "./DurationCard";

export default function ChooseDuration() {
  return (
    <Container>
      <div style={{ height: "80px" }}></div>
      <h3 className="ques-title">What's the duration of your holiday?</h3>

      <Row className="row-cols-lg-4 row-cols-2 gy-3 mt-4 ps-xl-5 pe-xk-5 ms-xl-5 me-xl-5">
        <Col>
          <DurationCard
            src="https://pyt-images.imgix.net/duration_option_1_0c9e8e2380.png?auto=format&fit=crop&w=96&q=75"
            min={3}
            max={5}
          />
        </Col>
        <Col>
          <DurationCard
            src="https://pyt-images.imgix.net/duration_option_2_66500bfd72.png?auto=format&fit=crop&w=96&q=75"
            min={6}
            max={8}
          />
        </Col>
        <Col>
          <DurationCard
            src="https://pyt-images.imgix.net/duration_option_3_ed7980d091.png?auto=format&fit=crop&w=96&q=75"
            min={9}
            max={11}
          />
        </Col>
        <Col>
          <DurationCard
            src="https://pyt-images.imgix.net/duration_option_4_d91110b9e1.png?auto=format&fit=crop&w=96&q=75"
            min={12}
            max={15}
          />
        </Col>
      </Row>
    </Container>
  );
}
