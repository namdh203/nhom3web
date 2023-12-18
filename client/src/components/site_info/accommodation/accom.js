import { Layout, Typography } from "antd";
import { BsWifi, BsClock } from "react-icons/bs";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { PiElevator } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import "../site_info.css";
import "./AccomFunction"
import { useState, useEffect } from "react";
import { getAccomData } from "./AccomFunction";
import extractLink from "../helper/helper.js"

const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

/**
 * Functional component representing a specific Accommodation website.
 * Fetches accommodation data once after the initial render.
 *
 * @param {object} props - Component properties (currently not used).
 * @returns {JSX.Element} - Rendered component displaying accommodation data.
 */
export default function Accommodation(props) {
    const currentURL = window.location.href;
    const url = new URL(currentURL);

    const accomId = url.searchParams.get("id");

    // Initialize accomData with default value: null.
    const [accomData, setAccomData] = useState(null);
    let name = "";
    let address = "";
    let pricePerNight = "";
    let priceCurrency = "$";
    let images = [];
    let introduction = ["https://cf2.bstatic.com/xdata/images/hotel/max1024x768/242756012.jpg?k=5d8d886c1242d477b8477a22c7b87491bbc3bf101c4edfc6915862904c3932db&o=&hp=1"];

    const utilities = [
        { name: "Air conditioner", icon: <TbAirConditioning /> },
        { name: "Restaurant", icon: <MdOutlineRestaurantMenu /> },
        { name: "24h Receptionist", icon: <BsClock /> },
        { name: "Elevator", icon: <PiElevator /> },
        { name: "Wifi", icon: <BsWifi /> },
    ];

    useEffect(() => {
        getAccomData(accomId).then(res => {
            setAccomData(res);

        }).catch(e => {
            console.error("Error when retrieving accomodation data: " + e);
        })

        // Cleanup function: Log a message when the data is retrieved.
        return () => {
            console.log("Accommodation data retrieval completed");

        };
    }, []) // Empty array here means the effect runs only once, after the initial render.
    // Render the component with the fetched accommodation data.
    if (accomData) {
        name = accomData.name;
        address = accomData.address;
        pricePerNight = accomData.pricePerNight;
        // priceCurrency = accomData.priceCurrency;
        introduction = accomData.description;

        images = extractLink(accomData.demoImage);
        console.log(images);

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
                                {/* <Paragraph>
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
                                </Paragraph> */}
                                <Paragraph className="lg-font-size">
                                    Telephone:  {accomData.telephone}
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
                                    {priceCurrency}
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
                                        src={images[1]}
                                        alt="Image 2"
                                    />
                                    <img
                                        className="sub-image rounded img-fluid my-2"
                                        src={images[2]}
                                        alt="Image 3"
                                    />
                                    <img
                                        className="sub-image rounded img-fluid"
                                        src={images[3]}
                                        alt="Image 4"
                                    />
                                </div>

                                <div className="d-flex flex-column col-6">
                                    <img
                                        className="sub-image rounded img-fluid"
                                        src={images[4]}
                                        alt="Image 2"
                                    />
                                    <img
                                        className="sub-image rounded img-fluid my-2"
                                        src={images[5]}
                                        alt="Image 3"
                                    />
                                    <img
                                        className="sub-image rounded img-fluid"
                                        src={images[6]}
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
        )
    } else {
        return (
            <p></p>
        )
    }
}