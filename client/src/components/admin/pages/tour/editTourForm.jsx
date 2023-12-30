import React, { useState, useEffect } from "react";
import { editTour, getTourById } from "./tourFunction";
import { useNavigate, useParams } from "react-router-dom";

const EditTourForm = () => {
    const { tourId } = useParams();
    const navigate = useNavigate();

    const [tour, setTour] = useState({
        id: '',
        destIds: [],
        title: '',
        description: '',
        duration: '',
        price: '',
        priceCurrency: '',
        additionInfo: '',
        voting: '',
        type: '',
        demoImage: '',
    });

    useEffect(() => {
        getTourDetails();
    }, []);

    const getTourDetails = async () => {
        try {
            // console.log(tourId);
            const tourDetails = await getTourById(tourId);
            // console.log(tourDetails.destIds);
            setTour({
                id: tourDetails.id,
                destIds: tourDetails.destIds,
                title: tourDetails.title,
                description: tourDetails.description,
                duration: tourDetails.duration,
                price: tourDetails.price,
                priceCurrency: tourDetails.priceCurrency,
                additionInfo: tourDetails.additionInfo,
                voting: tourDetails.voting,
                type: tourDetails.type,
                demoImage: tourDetails.demoImage,
            });
        } catch (error) {
            console.error("Error fetching tour details:", error);
        }
    };

    const onChange = (e) => {
        setTour({ ...tour, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        editTour(tour).then((res) => {
            alert(res.msg);
            navigate('/admin/tour');
        });
    };

    return (
        <div className="add-tour-detail-container">
            <div className="col col-md-9 col-12 add-tour-detail">
                <h2>Edit Tour</h2>
                <form className="user-profile_form" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>Destination IDs</label>
                        <input
                            type="text"
                            className="form-control"
                            name="destId"
                            placeholder="Enter destination IDs, split with ','"
                            value={tour.destIds ? tour.destIds.join(", ") : ''}
                            onChange={(e) => setTour({ ...tour, destIds: e.target.value.split(', ').map(destId => destId.trim()) })}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder="Enter title"
                            value={tour.title}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Description</label>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="Enter description"
                            value={tour.description}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Duration</label>
                        <input
                            type="number"
                            className="form-control"
                            name="duration"
                            placeholder="Enter duration"
                            value={tour.duration}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Price</label>
                        <input
                            type="number"
                            className="form-control"
                            name="price"
                            placeholder="Enter price"
                            value={tour.price}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Price Currency</label>
                        <input
                            type="text"
                            className="form-control"
                            name="priceCurrency"
                            placeholder="Enter price currency"
                            value={tour.priceCurrency}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Addition Info</label>
                        <input
                            type="text"
                            className="form-control"
                            name="additionInfo"
                            placeholder="Enter addition info"
                            value={tour.additionInfo}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Voting</label>
                        <input
                            type="number"
                            className="form-control"
                            name="voting"
                            placeholder="Enter voting"
                            value={tour.voting}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Type</label>
                        <input
                            type="text"
                            className="form-control"
                            name="type"
                            placeholder="Enter type"
                            value={tour.type}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Demo Image</label>
                        <input
                            type="text"
                            className="form-control"
                            name="demoImage"
                            placeholder="Enter demo image url"
                            value={tour.demoImage}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary profile-btn">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTourForm;