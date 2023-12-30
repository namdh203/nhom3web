import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './restaurant.css'
import { deleteRestaurant } from "./restaurantFunction";

const DeleteRestaurantForm = () => {
    const [oldRestaurant, setOldRestaurant] = useState({
        id: ''
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setOldRestaurant({...oldRestaurant, [e.target.name] : e.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault();

        deleteRestaurant(oldRestaurant).then (res => {
            alert(res.msg);
            setOldRestaurant({
                id: ''
            });
            navigate("/admin/dining")
        })
        .catch(() => {
            alert('Restaurant does not exists');
        });
    };

    return (
        <div className="delete-restaurant-detail-container">
            <div className="col col-md-9 col-12 add-restaurant-detail">
                <h2>Delete restaurant</h2>
                <form className="user-profile_form" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>ID</label>
                        <input
                            type="number"
                            className="form-control"
                            name="id"
                            placeholder="Enter ID"
                            value={oldRestaurant.id}
                            onChange={onChange}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary profile-btn">
                            Delete restaurant
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeleteRestaurantForm;