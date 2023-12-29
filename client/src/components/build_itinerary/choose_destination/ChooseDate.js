import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Space } from "antd";
import { LimitedDatePicker } from "./LimitedDatePicker";
import "./ChooseDate.css";

export default function ChooseDate() {
  const [startDate, setStartDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (startDate !== "") {
      const url = new URL(window.location);
      url.searchParams.append("date", startDate);
      window.location.href = url.pathname + url.search;
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Group className="mb-3 centered-text">
          <Form.Label className="ques-title">When are you travelling? </Form.Label>
        </Form.Group>
        <Space direction="vertical" id="departure-date-picker" >
          <LimitedDatePicker
            onChange={(_, dateString) => setStartDate(dateString)}
          />
        </Space>
      </Form.Group>

      <Button variant="success" type="submit" className="float-end">
        Next
      </Button>
    </Form>
  );
}
