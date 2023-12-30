import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './transportation.css'
import { deleteTransportation } from "./transportationFunction";

const DeleteTransportationForm = () => {
    const [oldTransportation, setOldTransportation] = useState({
        id: ''
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setOldTransportation({...oldTransportation, [e.target.name] : e.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault();

        deleteTransportation(oldTransportation).then (res => {
            alert(res.msg);
            setOldTransportation({
                id: ''
            });
            navigate("/admin/transportation")
        })
        .catch(() => {
            alert('transportation does not exists');
        });
    };

    return (
        <div className="delete-transportation-detail-container">
            <div className="col col-md-9 col-12 add-transportation-detail">
                <h2>Delete transportation</h2>
                <form className="user-profile_form" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>ID</label>
                        <input
                            type="number"
                            className="form-control"
                            name="id"
                            placeholder="Enter ID"
                            value={oldTransportation.id}
                            onChange={onChange}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary profile-btn">
                            Delete transportation
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeleteTransportationForm;