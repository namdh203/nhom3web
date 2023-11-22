import { Flex, Layout, Typography } from "antd";
import { BsWifi, BsClock } from "react-icons/bs";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { PiElevator } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import "./site_info.css";
import { useState, useEffect } from "react";

const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

export default function SiteInfo(props) {
  let name = "Azure Heights";
  let address = "123 Serenity Lane, Cityscape Heights, Tranquilville, 56789";
  let pricePerNight = "24.00";
  let currency = "$";

  const [accommodationData, setAccommodationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Image_link/accomodation.json");
        const data = await response.json();
        setAccommodationData(data);
      } catch (error) {
        console.error("Error fetching accommodation data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs once when the component mounts

  if (accommodationData && accommodationData.length > 0) {
    let linksString = "[";
    for (let i = 0; i < accommodationData.length; i++) {
      linksString += accommodationData[i].link + "," + "\n";
    }
    linksString += "]";
    console.log(linksString);
    // Alternatively, you can use this string in your React component state or display it in your UI.
  }

  if (!accommodationData || accommodationData.length === 0) {
    // Render loading state or return null
    return <div>Loading...</div>;
  }

  let images = [accommodationData[6].link];
  let introduction =
    "Azure Heights stands as an epitome of refined luxury and contemporary elegance. With meticulously designed rooms, impeccable service, and breathtaking city vistas, it embodies the pinnacle of sophistication. Experience a harmonious blend of comfort and style, where every moment reflects the essence of exclusivity at Azure Heights.";

  const utilities = [
    { name: "Air conditioner", icon: <TbAirConditioning /> },
    { name: "Restaurant", icon: <MdOutlineRestaurantMenu /> },
    { name: "24h Receptionist", icon: <BsClock /> },
    { name: "Elevator", icon: <PiElevator /> },
    { name: "Wifi", icon: <BsWifi /> },
  ];

  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <div className="container px-5">
          <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-column">
              <Title level={1} style={{ textAlign: "left" }}>
                {name}
              </Title>
              <Paragraph>
                <span className="lg-font-size">Voting: </span>
                <span>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </span>
              </Paragraph>
              <Paragraph className="md-font-size">
                <span className="me-2">
                  <FaLocationDot></FaLocationDot>
                </span>
                {address}
              </Paragraph>
            </div>

            <div className="d-flex flex-column justify-content-end text-end ">
              <Paragraph className="md-font-size">Price per night</Paragraph>
              <Paragraph className="text-end xl-font-size">
                {pricePerNight}
                {currency}
              </Paragraph>
            </div>
          </div>

          <div className="my-5 row image-container">
            <div className="main-image col-md-7 d-flex">
              <img
                className="rounded img-fluid"
                src={images[0]}
                alt="Image 1"
              />
            </div>

            <div className="row col-md-5">
              <div className="d-flex flex-column col-6">
                <img
                  className="sub-image rounded img-fluid"
                  src={images[0]}
                  alt="Image 2"
                />
                <img
                  className="sub-image rounded img-fluid my-2"
                  src={images[0]}
                  alt="Image 3"
                />
                <img
                  className="sub-image rounded img-fluid"
                  src={images[0]}
                  alt="Image 4"
                />
              </div>

              <div className="d-flex flex-column col-6">
                <img
                  className="sub-image rounded img-fluid"
                  src={images[0]}
                  alt="Image 2"
                />
                <img
                  className="sub-image rounded img-fluid my-2"
                  src={images[0]}
                  alt="Image 3"
                />
                <img
                  className="sub-image rounded img-fluid"
                  src={images[0]}
                  alt="Image 4"
                />
              </div>
            </div>
          </div>

          <div className="my-5">
            <div className="card p-4 mb-4">
              <Title level={3} className="mb-3">
                Introduction
              </Title>
              <Paragraph className="md-font-size">{introduction}</Paragraph>
            </div>
          </div>

          <div className="my-5">
            <div className="card p-4">
              <Title level={3} className="mb-3">
                Utilities
              </Title>
              {utilities.map((utility, index) => (
                <Paragraph key={index} className="mb-2 md-font-size">
                  <span className="icon m-2">{utility.icon}</span>{" "}
                  {utility.name}
                </Paragraph>
              ))}
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
