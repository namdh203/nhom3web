import React, { useState } from 'react';
import './activity.css'
import { useNavigate } from "react-router-dom";
import { addActivity } from './activityFunction';

const AddActivityForm = () => {
    const [newActivity, setNewActivity] = useState({
        name: '',
        destId: '',
        type: '',
        description: '',
        additionInfo: '',
        demoImage: '',
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setNewActivity({ ...newActivity, [e.target.name]: e.target.value });
    };


    const onSubmit = (e) => {
        e.preventDefault();

        addActivity(newActivity).then((res) => {
            alert(res.msg);
            setNewActivity({
                name: '',
                destId: '',
                type: '',
                description: '',
                additionInfo: '',
                demoImage: '',
            });
            navigate('/admin/activity');
        });
    };

    return (
        <div className="add-activity-detail-container">
            <div className="col col-md-9 col-12 add-activity-detail">
                <h2>Add activity</h2>
                <form className="user-profile_form" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter name"
                            value={newActivity.name}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>destId</label>
                        <input
                            type="number"
                            className="form-control"
                            name="destId"
                            placeholder="Enter destId"
                            value={newActivity.destId}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Type</label>
                        <input
                            type="text"
                            className="form-control"
                            name="type"
                            placeholder="Enter type"
                            value={newActivity.type}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Description</label>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="Enter description"
                            value={newActivity.description}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Addition Info</label>
                        <input
                            type="text"
                            className="form-control"
                            name="additionInfo"
                            placeholder="Enter addition info"
                            value={newActivity.additionInfo}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Demo Image</label>
                        <input
                            type="text"
                            className="form-control"
                            name="demoImage"
                            placeholder="Enter demo image"
                            value={newActivity.demoImage}
                            onChange={onChange}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary profile-btn">
                            Add activity
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddActivityForm;
