import React, { useState } from 'react';
import './tour.css'
import { useNavigate } from "react-router-dom";
import { addTour } from './tourFunction';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const AddTourForm = () => {
    const [newTour, setNewTour] = useState({
        destId: [],
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

    const navigate = useNavigate();

    const onChange = (e) => {
        setNewTour({ ...newTour, [e.target.name]: e.target.value });
    };


    const onSubmit = (e) => {
        e.preventDefault();

        addTour(newTour).then((res) => {
            alert(res.msg);
            setNewTour({
                destId: [],
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
            navigate('/admin/tour');
        });
    };

    return (
        <div className="add-tour-detail-container">
            <div className="col col-md-9 col-12 add-tour-detail">
                <h2>Add Tour</h2>
                <form className="user-profile_form" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>Destination IDs</label>
                        <input
                            type="text"
                            className="form-control"
                            name="destId"
                            placeholder="Enter destination IDs, split with ','"
                            value={newTour.destId}
                            onChange={(e) => setNewTour({ ...newTour, destId: e.target.value.split(',') })}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder="Enter title"
                            value={newTour.title}
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
                            value={newTour.description}
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
                            value={newTour.duration}
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
                            value={newTour.price}
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
                            value={newTour.priceCurrency}
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
                            value={newTour.additionInfo}
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
                            value={newTour.voting}
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
                            value={newTour.type}
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
                            value={newTour.demoImage}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary profile-btn">
                            Add Tour
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTourForm;
