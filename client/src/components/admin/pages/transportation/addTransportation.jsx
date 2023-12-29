import React, { useState } from 'react';
import './transportation.css'
import { useNavigate } from "react-router-dom";
import { addTransportation } from './transportationFunction';

const AddTransportationForm = () => {
    const [newTransportation, setNewTransportation] = useState({
        destId: [],
        type: '',
        additionInfo: '',
        demoImage: '',
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setNewTransportation({ ...newTransportation, [e.target.name]: e.target.value });
    };


    const onSubmit = (e) => {
        e.preventDefault();

        addTransportation(newTransportation).then((res) => {
            alert(res.msg);
            setNewTransportation({
                destId: [],
                type: '',
                additionInfo: '',
                demoImage: '',
            });
            navigate('/admin/transportation');
        });
    };

    return (
        <div className="add-transportation-detail-container">
            <div className="col col-md-9 col-12 add-transportation-detail">
                <h2>Add transportation</h2>
                <form className="user-profile_form" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>Destination IDs</label>
                        <input
                            type="text"
                            className="form-control"
                            name="destId"
                            placeholder="Enter destination IDs, split with ','"
                            value={newTransportation.destId}
                            onChange={(e) => setNewTransportation({ ...newTransportation, destId: e.target.value.split(',') })}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Type</label>
                        <input
                            type="text"
                            className="form-control"
                            name="type"
                            placeholder="Enter type"
                            value={newTransportation.type}
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
                            value={newTransportation.additionInfo}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Demo Image</label>
                        <input
                            type="text"
                            className="form-control"
                            name="demoImage"
                            placeholder="Enter demo image url"
                            value={newTransportation.demoImage}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary profile-btn">
                            Add transportation
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTransportationForm;
