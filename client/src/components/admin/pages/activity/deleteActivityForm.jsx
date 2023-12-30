import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './activity.css'
import { deleteActivity } from "./activityFunction";

const DeleteActivityForm = () => {
    const [oldActivity, setOldActivity] = useState({
        id: ''
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setOldActivity({...oldActivity, [e.target.name] : e.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault();

        deleteActivity(oldActivity).then (res => {
            alert(res.msg);
            setOldActivity({
                id: ''
            });
            navigate("/admin/activity")
        })
        .catch(() => {
            alert('Activity does not exists');
        });
    };

    return (
        <div className="delete-activity-detail-container">
            <div className="col col-md-9 col-12 add-activity-detail">
                <h2>Delete activity</h2>
                <form className="user-profile_form" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>ID</label>
                        <input
                            type="number"
                            className="form-control"
                            name="id"
                            placeholder="Enter ID"
                            value={oldActivity.id}
                            onChange={onChange}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary profile-btn">
                            Delete activity
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeleteActivityForm;