import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './accommodation.css'
import { deleteAccommodation } from "./accommodationFunction";

const DeleteAccommodationForm = () => {
    const [oldAccommodation, setOldAccommodation] = useState({
        id: ''
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setOldAccommodation({...oldAccommodation, [e.target.name] : e.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault();

        deleteAccommodation(oldAccommodation).then (res => {
            alert(res.msg);
            setOldAccommodation({
                id: ''
            });
            navigate("/admin/accommodation")
        })
        .catch(() => {
            alert('Accommodation does not exists');
        });
    };

    return (
        <div className="delete-accommodation-detail-container">
            <div className="col col-md-9 col-12 add-accommodation-detail">
                <h2>Delete accommodation</h2>
                <form className="user-profile_form" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>ID</label>
                        <input
                            type="number"
                            className="form-control"
                            name="id"
                            placeholder="Enter ID"
                            value={oldAccommodation.id}
                            onChange={onChange}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary profile-btn">
                            Delete accommodation
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeleteAccommodationForm;