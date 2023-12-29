import { Flex, Layout, Typography } from "antd";
import { TiTickOutline } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import "../site_info.css";
import { useState, useEffect } from "react";
import { getActivityData } from "./ActivityFunc.js";
import extractLink from "../helper/helper.js"
import Comment from "../../comment/comment.jsx"

const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

/**
 * Functional component representing a specific Activity website.
 * Fetches accommodation data once after the initial render.
 *
 * @param {object} props - Component properties (currently not used).
 * @returns {JSX.Element} - Rendered component displaying accommodation data.
 */
export default function Activity(props) {
    const currentURL = window.location.href;
    const url = new URL(currentURL);

    const actId = url.searchParams.get("id");

    // Initialize accomData with default value: null.
    const [activityData, setActivityData] = useState(null);
    let name = "";
    let images = [];
    let introduction = "";
    let type = "";
    let utilities = [];

    useEffect(() => {
        getActivityData(actId).then(res => {
            setActivityData(res);

        }).catch(e => {
            console.error("Error when retrieving activity data: " + e);
        })

        // Cleanup function: Log a message when the data is retrieved.
        return () => {
            console.log("Activity data retrieval completed");

        };
    }, []) // Empty array here means the effect runs only once, after the initial render.

    // Render the component with the fetched accommodation data.
    if (activityData) {
        name = activityData.name;
        introduction = activityData.description;

        images = extractLink(activityData.demoImage);
        utilities = activityData.additionInfo.split(",");
        type = activityData.type;

        return (
            <Layout>
                {/* <Header>Header</Header> */}
                <div className="buffer-block"></div>
                <Content>
                    <div className="container px-5">
                        <div className="card">
                            <div className="d-flex flex-row justify-content-between mb-0 mt-3">
                                <div className="d-flex flex-column mx-4">
                                    <Title level={1} style={{ textAlign: "left" }}>
                                        {name}
                                    </Title>
                                    <Paragraph className="border md-font-size text-center bg-success text-white" style={
                                        {
                                            borderRadius: "32px",
                                            width: "100px",
                                            height: "40px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }
                                    }>
                                        {type}
                                    </Paragraph>

                                </div>
                            </div>

                            <div className="mt-2 mb-5 row image-container px-4" style={{ marginTop: "10vh" }}>
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
                                    What's included
                                </Title>
                                {utilities.map((utility, index) => (
                                    <Paragraph key={index} className="mb-2 md-font-size">
                                        <span className="icon lg-font-size m-2"><TiTickOutline /></span>{" "}
                                        {utility}
                                    </Paragraph>
                                ))}
                            </div>
                        </div>

                        <Comment type="activity" type_name={name}></Comment>

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