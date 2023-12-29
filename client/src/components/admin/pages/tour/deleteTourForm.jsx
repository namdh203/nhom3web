import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './tour.css'
import { deleteTour } from "./tourFunction";

const DeleteTourForm = () => {
    const [oldTour, setOldTour] = useState({
        id: ''
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setOldTour({...oldTour, [e.target.name] : e.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault();

        deleteTour(oldTour).then (res => {
            alert(res.msg);
            setOldTour({
                id: ''
            });
            navigate("/admin/tour")
        })
        .catch(() => {
            alert('Tour does not exists');
        });
    };

    return (
        <div className="delete-tour-detail-container">
            <div className="col col-md-9 col-12 add-tour-detail">
                <h2>Delete tour</h2>
                <form className="user-profile_form" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>ID</label>
                        <input
                            type="number"
                            className="form-control"
                            name="id"
                            placeholder="Enter ID"
                            value={oldTour.id}
                            onChange={onChange}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary profile-btn">
                            Delete tour
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeleteTourForm;