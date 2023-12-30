import {  Layout, Typography } from "antd";
import { TiTickOutline } from 'react-icons/ti';
import { FaLocationDot } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import "../site_info.css";
import { useState, useEffect } from "react";
import { getRestData } from "./RestFunc.js";
import extractLink from "../helper/helper.js"
import Comment from "../../comment/comment.jsx"

const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

/**
 * Functional component representing a specific Restaurant website.
 * Fetches accommodation data once after the initial render.
 *
 * @param {object} props - Component properties (currently not used).
 * @returns {JSX.Element} - Rendered component displaying accommodation data.
 */
export default function Restaurant(props) {
    const currentURL = window.location.href;
    const url = new URL(currentURL);

    const restId = url.searchParams.get("id");

    // Initialize accomData with default value: null.
    const [restData, setRestData] = useState(null);
    let name = "";
    let address = "";
    let images = [];
    let introduction = "";

    let utilities = [];

    useEffect(() => {
        getRestData(restId).then(res => {
            setRestData(res);

        }).catch(e => {
            console.error("Error when retrieving restaurant data: " + e);
        })

        // Cleanup function: Log a message when the data is retrieved.
        return () => {
            
            console.log("Restaurant data retrieval completed");

        };
    }, []) // Empty array here means the effect runs only once, after the initial render.

    // Render the component with the fetched accommodation data.
    if (restData) {
        name = restData.name;
        address = restData.address;
        introduction = restData.description;
        utilities = restData.additionInfo.split(",");

        images = extractLink(restData.demoImage);
        let priceRank = restId % 4 + 1;

        return (
            <Layout>
                <div className="buffer-block"></div>
                <Content style={{paddingLeft: "0"}}>
                    <div className="container px-5">
                        <div className="card">
                            <div className="d-flex flex-row justify-content-between mb-0 mt-3">
                                <div className="d-flex flex-column mx-4">
                                    <Title level={1} style={{ textAlign: "left" }}>
                                        {name}
                                    </Title>
                                    <Paragraph className="lg-font-size my-1">
                                        Telephone:  {restData.telephone}
                                    </Paragraph>
                                    <Paragraph className="md-font-size">
                                        <span className="me-2 h-100">
                                            <FaLocationDot></FaLocationDot>
                                        </span>
                                        {address}
                                    </Paragraph>
                                </div>

                                <div className="d-flex flex-column text-end me-4" style={{ marginTop: "3vh" }}>

                                    <Paragraph className="md-font-size m-0">Price rank</Paragraph>
                                    <Paragraph className="text-end xl-font-size m-0">
                                        {(() => {
                                            switch (priceRank) {
                                                case 1:
                                                    return '$';
                                                case 2:
                                                    return '$$';
                                                case 3:
                                                    return '$$$';
                                                case 4:
                                                    return '$$$$';
                                                default:
                                                    return '';
                                            }
                                        })()}
                                    </Paragraph>
                                </div>
                            </div>

                            <div className="my-5 row image-container px-4 mt-0">
                                <div className="main-image col-md-7 d-flex">
                                    <img
                                        className="rounded img-fluid "
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
                                    Speciality
                                </Title>
                                {utilities.map((utility, index) => (
                                    <Paragraph key={index} className="mb-2 md-font-size">
                                        <span className="icon lg-font-size m-2"><TiTickOutline/></span>{" "}
                                        {utility}
                                    </Paragraph>
                                ))}
                            </div>
                        </div>
                        <Comment type="rest" type_name={name}></Comment>
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