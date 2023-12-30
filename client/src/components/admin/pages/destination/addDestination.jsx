import React, { useState } from 'react';
import './destination.css'
import { useNavigate } from "react-router-dom";
import { addDestination } from './destinationFunction';

const AddDestinationForm = () => {
    const [newDestination, setNewDestination] = useState({
        // destId: [],
        name: "",
        countryId: 1,
        description: "",
        additionInfo: '',
        demoImage: '',
        transId: [],
        restId: [],
        accomId: [],
        actId: []
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setNewDestination({ ...newDestination, [e.target.name]: e.target.value });
    };


    const onSubmit = (e) => {
        e.preventDefault();

        addDestination(newDestination).then((res) => {
            alert(res.msg);
            setNewDestination({
                name: "",
                countryId: 1,
                description: "",
                additionInfo: '',
                demoImage: '',
                transId: [],
                restId: [],
                accomId: [],
                actId: []
            });
            navigate('/admin/destination');
        });
    };

    return (
        <div className="add-transportation-detail-container">
            <div className="col col-md-9 col-12 add-transportation-detail">
                <h2>Add destination</h2>
                <form className="user-profile_form" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter name"
                            value={newDestination.name}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Country ID</label>
                        <input
                            type="text"
                            className="form-control"
                            name="countryId"
                            placeholder="Enter country id"
                            value={newDestination.countryId}
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
                            value={newDestination.description}
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
                            value={newDestination.additionInfo}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Accom IDs</label>
                        <input
                            type="text"
                            className="form-control"
                            name="accomId"
                            placeholder="Enter accommodation IDs, split with ','"
                            value={newDestination.accomId}
                            onChange={(e) => setNewDestination({ ...newDestination, accomId: e.target.value.split(',') })}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Rest IDs</label>
                        <input
                            type="text"
                            className="form-control"
                            name="restId"
                            placeholder="Enter restaurant IDs, split with ','"
                            value={newDestination.restId}
                            onChange={(e) => setNewDestination({ ...newDestination, restId: e.target.value.split(',') })}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Accom IDs</label>
                        <input
                            type="text"
                            className="form-control"
                            name="transId"
                            placeholder="Enter transportation IDs, split with ','"
                            value={newDestination.transId}
                            onChange={(e) => setNewDestination({ ...newDestination, transId: e.target.value.split(',') })}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Accom IDs</label>
                        <input
                            type="text"
                            className="form-control"
                            name="actId"
                            placeholder="Enter activity IDs, split with ','"
                            value={newDestination.actId}
                            onChange={(e) => setNewDestination({ ...newDestination, actId: e.target.value.split(',') })}
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label>Demo Image</label>
                        <input
                            type="text"
                            className="form-control"
                            name="demoImage"
                            placeholder="Enter demo image url"
                            value={newDestination.demoImage}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary profile-btn">
                            Add destination
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDestinationForm;
