import Form from "react-bootstrap/Form";
import "./SetDuration.css"
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function SetDuration() {
  const [duration, setDuration] = useState(1);

  function handleSubmit() {
    const url = new URL(window.location);
    url.searchParams.append('duration', duration);
    window.location.href = url.pathname + url.search;
  }
  
  const durationOptions = [
    {
      index: 0,
      label: "3-5 Days",
    },
    {
      index: 1,
      label: "6-8 Days",
    },
    {
      index: 2,
      label: "9-11 Days",
    },
    {
      index: 3,
      label: "12-20 Days",
    },
  ];
  
  function handleColClick(index) {
    setDuration(durationOptions[index].label);
    handleSubmit();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="ControlDuration">
        <Form.Label className="ques-title">What's the duration of your holiday?</Form.Label>
      </Form.Group>
         <div class="row gx-5">
            <div class="col" onClick={() => handleColClick(0)}>
             <div class="p-3">
                <img
                    src = "https://pyt-images.imgix.net/duration_option_1_0c9e8e2380.png?auto=format&fit=crop&w=256&q=75"
                    className="rounded-circle img-fluid"
                />
                <Form.Label className="option-duration">3-5 Days</Form.Label>
             </div>
            </div>
            <div class="col" onClick={() => handleColClick(1)}>
             <div class="p-3">
                <img
                    src = "https://pyt-images.imgix.net/duration_option_2_66500bfd72.png?auto=format&fit=crop&w=256&q=75"
                    className="rounded-circle img-fluid"
                />
                <Form.Label className="option-duration">6-8 Days</Form.Label>
             </div>
            </div>
            <div class="col" onClick={() => handleColClick(2)}>
             <div class="p-3">
                <img
                    src = "https://pyt-images.imgix.net/duration_option_3_ed7980d091.png?auto=format&fit=crop&w=256&q=75"
                    className="rounded-circle img-fluid"
                />
                <Form.Label className="option-duration">9-11 Days</Form.Label>
             </div>
            </div>
            <div class="col" onClick={() => handleColClick(3)}>
             <div class="p-3">
                <img
                    src = "https://pyt-images.imgix.net/duration_option_4_d91110b9e1.png?auto=format&fit=crop&w=256&q=75"
                    className="rounded-circle img-fluid"
                />
                <Form.Label className="option-duration">12-20 Days</Form.Label>
             </div>
            </div>
        </div>
    </Form>
  );
}
