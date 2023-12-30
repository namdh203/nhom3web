import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './destination.css'
import { deleteDestination } from "./destinationFunction";

const DeleteDestinationForm = () => {
    const [oldDestination, setOldDestination] = useState({
        id: ''
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setOldDestination({...oldDestination, [e.target.name] : e.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault();

        deleteDestination(oldDestination).then (res => {
            alert(res.msg);
            setOldDestination({
                id: ''
            });
            navigate("/admin/destination")
        })
        .catch(() => {
            alert('Destination does not exists');
        });
    };

    return (
        <div className="delete-destination-detail-container">
            <div className="col col-md-9 col-12 add-destination-detail">
                <h2>Delete destination</h2>
                <form className="user-profile_form" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>ID</label>
                        <input
                            type="number"
                            className="form-control"
                            name="id"
                            placeholder="Enter ID"
                            value={oldDestination.id}
                            onChange={onChange}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary profile-btn">
                            Delete destination
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeleteDestinationForm;