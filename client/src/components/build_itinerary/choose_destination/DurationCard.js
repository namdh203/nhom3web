import Card from "react-bootstrap/Card";

export default function DurationCard({ src, min, max }) {
  function handleOnClick() {
    const url = new URL(window.location);
    url.searchParams.append("min", min);
    url.searchParams.append("max", max);
    window.location.href = "/build-itinerary/destinations" + url.search;
  }

  return (
    <Card className="float-on-hover-card shadow-sm" onClick={handleOnClick}>
      <Card.Body>
        <Card.Img
          variant="top"
          src={src}
          className="img-fluid mb-4 mt-4 rounded-circle"
          style={{ maxWidth: "120px" }}
        />
        <Card.Text className="fw-medium mt-4 mb-4">
          {min}-{max} Days
        </Card.Text>{" "}
      </Card.Body>
    </Card>
  );
}
