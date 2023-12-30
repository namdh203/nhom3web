import React, { useState } from 'react';
import './restaurant.css'
import { useNavigate } from "react-router-dom";
import { addRestaurant } from './restaurantFunction';

const AddRestaurantForm = () => {
    const [newRestaurant, setNewRestaurant] = useState({
        name: '',
        destId: '',
        address: '',
        telephone: '',
        description: '',
        additionInfo: '',
        demoImage: '',
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
    };


    const onSubmit = (e) => {
        e.preventDefault();

        addRestaurant(newRestaurant).then((res) => {
            alert(res.msg);
            setNewRestaurant({
                name: '',
                destId: '',
                address: '',
                telephone: '',
                description: '',
                additionInfo: '',
                demoImage: '',
            });
            navigate('/admin/dining');
        });
    };

    return (
        <div className="add-restaurant-detail-container">
            <div className="col col-md-9 col-12 add-restaurant-detail">
                <h2>Add restaurant</h2>
                <form className="user-profile_form" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter name"
                            value={newRestaurant.name}
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
                            value={newRestaurant.destId}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Address</label>
                        <input
                            type="text"
                            className="form-control"
                            name="address"
                            placeholder="Enter address"
                            value={newRestaurant.address}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Telephone</label>
                        <input
                            type="number"
                            className="form-control"
                            name="telephone"
                            placeholder="Enter telephone"
                            value={newRestaurant.telephone}
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
                            value={newRestaurant.description}
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
                            value={newRestaurant.additionInfo}
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
                            value={newRestaurant.demoImage}
                            onChange={onChange}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary profile-btn">
                            Add restaurant
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddRestaurantForm;
