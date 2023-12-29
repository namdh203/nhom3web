import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useState, useEffect } from "react";
import { LuFlagTriangleRight } from "react-icons/lu";
import "./ChooseDestinations.css";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function translateAdviceCode(adviceCode) {
  switch (adviceCode) {
    case 0:
      return "OFF SEASON";
    case 1:
      return "SECOND BEST";
    case 2:
      return "OUR PICK";
    case 3:
      return "TOO CROWDED";
  }
  return "ERROR";
}

export default function ChooseMonth() {
  const today = new Date();
  const [monthlyAdvice, setMonthlyAdvice] = useState([]);
  const url = new URL(window.location);

  useEffect(() => {
    const countryId = url.searchParams.get("country");
    axios.post("/destinations/get-advice", { countryId }).then((response) => {
      const temp = [];
      response.data.forEach((advice) => {
        temp[advice.month - 1] = {
          adviceCode: advice.adviceCode,
          lowTemp: advice.lowTemp,
          highTemp: advice.highTemp,
        };
      });
      setMonthlyAdvice(temp);
    });
  }, []);

  return (
    <>
      {monthlyAdvice.length === 0 ? (
        <h4>Loading...</h4>
      ) : (
        <Container className="p-4 text-center">
          <h4 className="mb-5">Which month are you going to travel?</h4>

          <Row className="row-cols-lg-6 row-cols-md-4 row-cols-3 gy-3">
            {Array.from(
              { length: 9 },
              (_, i) => (today.getMonth() + i + 1) % 12
            ).map((monthIndex) => (
              <Col className="w-15">
                <Card
                  className="h-100 shadow-sm float-on-hover-card"
                  onClick={() => {
                    url.searchParams.append("month", monthIndex + 1);
                    window.location.href = "/build-itinerary/date" + url.search;
                  }}
                >
                  <Card.Header className="d-flex justify-content-center">
                    <Card.Title>{monthNames[monthIndex]}</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Row className="row-cols-1">
                      <Col className="d-flex justify-content-center p-1">
                        <Card.Text
                          className={
                            "mx-auto" +
                            (monthlyAdvice[monthIndex].adviceCode === 2
                              ? " text-light bg-success bg-gradient border border-success rounded"
                              : " text-light-emphasis")
                          }
                        >
                          {monthlyAdvice[monthIndex].adviceCode === 2 && (
                            <LuFlagTriangleRight />
                          )}
                          {translateAdviceCode(
                            monthlyAdvice[monthIndex].adviceCode
                          )}
                        </Card.Text>
                      </Col>
                      <Col className="d-flex justify-content-center">
                        <Card.Text className="text-secondary">
                          {monthlyAdvice[monthIndex].lowTemp} -{" "}
                          {monthlyAdvice[monthIndex].highTemp}°C
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}

            <Col xs={12} sm={12} md={9} lg={6} xl={6} xxl={6} className="">
              <Row className="h-100 align-items-center justify-content-center p-3">
                <Col>
                  <p>
                    Issue of online vouchers is restricted for departure within
                    the next 9 months. If you are planning for a later date,
                    please contact us.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
