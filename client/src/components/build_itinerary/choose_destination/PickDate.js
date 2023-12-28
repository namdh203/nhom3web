import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Calendar, theme } from "antd";
import Container from "react-bootstrap/Container";
import "./ChooseDestinations.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";

dayjs.extend(customParseFormat);

export default function PickDate() {
  const url = new URL(window.location);
  const month = url.searchParams.get("month");
  const today = new Date();
  const defaultDate = dayjs(
    new Date(
      today.getMonth() + 1 > month
        ? today.getFullYear() + 1
        : today.getFullYear(),
      month - 1,
      1
    )
  );
  const [date, setDate] = useState(defaultDate);

  const disabledDate = (current) => {
    // Can not select days before today and today
    return (
      current &&
      (current < dayjs().endOf("day") || current >= defaultDate.add(9, "month"))
    );
  };

  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 500,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const transitionToNextPage = () => {
    url.searchParams.append("date", date?.format("YYYY-MM-DD"));
    window.location.href = "/build-itinerary/duration" + url.search;
  };

  return (
    <>
      <div style={{ height: "30px" }}></div>
      <Container>
        <Row className="row-cols-1 gy-3">
          <Col>
            <h3>When is your departure date?</h3>
          </Col>
          <Col className="d-flex justify-content-center">
            <div style={wrapperStyle}>
              <Calendar
                fullscreen={false}
                disabledDate={disabledDate}
                defaultValue={defaultDate}
                onSelect={(newValue) => setDate(newValue)}
              />
            </div>
          </Col>
          <Col>
            <Button variant="success mt-1" onClick={transitionToNextPage}>
              Next
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
