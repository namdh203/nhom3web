import Form from "react-bootstrap/Form";
import { Space } from "antd";
import { LimitedDatePicker } from "./LimitedDatePicker";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function ChooseDate() {
  const [duration, setDuration] = useState(1);
  const [startDate, setStartDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (startDate !== "") {
      const url = new URL(window.location);
      url.searchParams.append("duration", duration);
      url.searchParams.append("date", startDate);
      window.location.href = url.pathname + url.search;
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="ControlDuration">
        <Form.Label>What's the duration of your holiday?</Form.Label>
        <Form.Select
          style={{ width: "30%" }}
          aria-label="Default select example"
          id="select-duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        >
          <option value="1">3-5 Days</option>
          <option value="2">6-8 Days</option>
          <option value="3">9-11 Days</option>
          <option value="4">12-15 Days</option>
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Choose the departure date: </Form.Label>
        <Space direction="vertical" id="departure-date-picker">
          <LimitedDatePicker
            onChange={(_, dateString) => setStartDate(dateString)}
          />
        </Space>
      </Form.Group>

      <Button variant="success" type="submit">
        Next
      </Button>
    </Form>
  );
}
