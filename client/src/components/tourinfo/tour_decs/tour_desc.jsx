import React from "react";
import "./tour_desc.css"

export default class TourDesc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.generateRandomTime = this.generateRandomTime.bind(this)
        this.generateTimeRange = this.generateTimeRange.bind(this)
    }

    generateTimeRange(startTime, durationInMinutes) {
        // Sao chép thời điểm bắt đầu để tránh thay đổi giá trị gốc
        const endTime = new Date(startTime);

        // Thêm vào khoảng thời gian (đơn vị tính là phút)
        endTime.setMinutes(endTime.getMinutes() + durationInMinutes);

        return {
            startTime: new Date(startTime),
            endTime: endTime
        };
    }


    generateRandomTime(startDate, endDate) {
        // Chuyển đổi thời điểm bắt đầu và kết thúc thành số mili giây
        const startMillis = startDate.getTime();
        const endMillis = endDate.getTime();

        // Sinh một số ngẫu nhiên trong khoảng từ startMillis đến endMillis
        const randomMillis = Math.floor(Math.random() * (endMillis - startMillis + 1)) + startMillis;

        // Tạo một thời điểm từ số mili giây ngẫu nhiên
        const randomTime = new Date(randomMillis);

        return randomTime;
    }

    componentDidMount() {
        const body = document.body
        var tbody = body.querySelector('tbody')
        var content = ""
        const duration = this.props.tour.duration
        const start = this.props.tour.startDate
        const end = this.props.tour.endDate
        for (let i = 0; i < 10; i++) {
            const duration_ = Math.floor(Math.random() * parseInt(duration - 1)) + 1
            content = content + `<tr><td>${i}</td><td>${duration_} days</td>`

            var startDate = this.generateRandomTime(new Date(start), new Date(end))
            var endDate = new Date(startDate.getTime() + parseInt(duration_) * 1000 * 60 * 60 * 24);
            content = content + `<td>${startDate.toString().slice(0, 10)}</td><td>${endDate.toString().slice(0, 10)}</td></tr>`
            // content = content + `<td>${start}</td><td>${end}</td></tr>`
        }
        tbody.innerHTML = content
    }

    render() {
        if (this.props.tour === null) {
            return <p>Loading ....</p>
        }

        return (
            <div className="tour-desc_wrapper" style={{ display: "none" }}>
                <div className="tour-desc">
                    <h1>Description</h1>
                    <p>{this.props.tour.description}</p>

                    <h1>Duration </h1>
                    <p>This tour usually lasts maximum {this.props.tour.duration} days with a lot of vibrant activities that can stimulate your interest.</p>

                    <h1>Options</h1>
                    <table className="tour-desc_options">
                        <thead>
                            <tr>
                                <td style={{"fontWeight": "bold"}}>TOUR ID</td>
                                <td style={{"fontWeight": "bold"}}>DURATION</td>
                                <td style={{"fontWeight": "bold"}}>START DATE</td>
                                <td style={{"fontWeight": "bold"}}>END DATE</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {this.state.clone.map((tour) => (
                                <tr>
                                    <td>{this.props.tour.title}</td>
                                    <td>{this.props.tour.duration}</td>
                                    <td>{this.props.tour.startDate}</td>
                                    <td>{this.props.tour.endDate}</td>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>

                </div>

                <div className="tour-factor_wrapper">
                    <div className="tour-factor">
                        <i className="fa-regular fa-calendar-days"></i>
                        <span>Planning</span>
                    </div>
                    <div className="tour-factor">
                        <i className="fa-solid fa-truck-plane"></i>
                        <span>Transportations</span>
                    </div>
                    <div className="tour-factor">
                        <i className="fa-solid fa-hotel"></i>
                        <span>Accommodations</span>
                    </div>
                    <div className="tour-factor">
                        <i className="fa-solid fa-heart-pulse"></i>
                        <span>Activities</span>
                    </div>
                    <div className="tour-factor last-element">
                        <i className="fa-solid fa-drumstick-bite"></i>
                        <span>Restaurants</span>
                    </div>
                </div>
            </div>
        )
    }
}