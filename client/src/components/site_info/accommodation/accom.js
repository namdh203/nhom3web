import { Layout, Typography } from "antd";
import { TiTickOutline } from 'react-icons/ti';
import { FaLocationDot } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import "../site_info.css";
import "./AccomFunction"
import { useState, useEffect } from "react";
import { getAccomData } from "./AccomFunction";
import extractLink from "../helper/helper.js"
import Comment from "../../comment/comment.jsx"

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

    let utilities = ["Air conditioner", "Restaurant", "Wifi"];

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
        utilities = accomData.additionInfo.split(",");

        return (
            <Layout>
                <div className="buffer-block"></div>
                <Content>
                    <div className="container px-5">
                        <div className="card">
                            <div className="d-flex flex-row justify-content-between mb-0 mt-3">
                                <div className="d-flex flex-column mx-4">
                                    <Title level={1} style={{ textAlign: "left", maxWidth: "60vw" }}>
                                        {name}
                                    </Title>
                                    <Paragraph className="lg-font-size my-1">
                                        Telephone:  {accomData.telephone}
                                    </Paragraph>
                                    <Paragraph className="md-font-size">
                                        <span className="me-2">
                                            <FaLocationDot></FaLocationDot>
                                        </span>
                                        {address}
                                    </Paragraph>
                                </div>

                                <div className="d-flex flex-column text-end me-4" style={{ marginTop: "4%" }}>
                                    <Paragraph className="md-font-size m-0">Price per night</Paragraph>
                                    <Paragraph className="text-end xl-font-size m-0">
                                        {pricePerNight}
                                        {priceCurrency}
                                    </Paragraph>
                                </div>
                            </div>

                            <div className="my-5 row image-container px-4 mt-0">
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
                                        <span className="icon lg-font-size m-2"><TiTickOutline/></span>{" "}
                                        {utility}
                                    </Paragraph>
                                ))}
                            </div>
                        </div>

                        <Comment type="accom" type_name={name}></Comment>

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