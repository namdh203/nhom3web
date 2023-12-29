import React, { useState } from 'react';
import './accommodation.css'
import { useNavigate } from "react-router-dom";
import { addAccommodation } from './accommodationFunction';

const AddAccommodationForm = () => {
    const [newAccommodation, setNewAccommodation] = useState({
        name: '',
        destId: '',
        pricePerNight: '',
        priceCurrency: '',
        address: '',
        telephone: '',
        contactEmail: '',
        description: '',
        additionInfo: '',
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setNewAccommodation({ ...newAccommodation, [e.target.name]: e.target.value });
    };


    const onSubmit = (e) => {
        e.preventDefault();

        addAccommodation(newAccommodation).then((res) => {
            alert(res.msg);
            setNewAccommodation({
                name: '',
                destId: '',
                pricePerNight: '',
                priceCurrency: '',
                address: '',
                telephone: '',
                contactEmail: '',
                description: '',
                additionInfo: '',
            });
            navigate('/admin/accommodation');
        });
    };

    return (
        <div className="add-accommodation-detail-container">
            <div className="col col-md-9 col-12 add-accommodation-detail">
                <h2>Add accommodation</h2>
                <form className="user-profile_form" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter name"
                            value={newAccommodation.name}
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
                            value={newAccommodation.destId}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Price Per Night</label>
                        <input
                            type="number"
                            className="form-control"
                            name="pricePerNight"
                            placeholder="Enter pricePerNight"
                            value={newAccommodation.pricePerNight}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Price Currency</label>
                        <input
                            type="text"
                            className="form-control"
                            name="priceCurrency"
                            placeholder="Enter priceCurrency"
                            value={newAccommodation.priceCurrency}
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
                            value={newAccommodation.address}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Telephone</label>
                        <input
                            type="number"
                            className="form-control"
                            name="telephone"
                            placeholder="Enter telephone"
                            value={newAccommodation.telephone}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Contact Email</label>
                        <input
                            type="text"
                            className="form-control"
                            name="contactEmail"
                            placeholder="Enter contact email"
                            value={newAccommodation.contactEmail}
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
                            value={newAccommodation.description}
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
                            value={newAccommodation.additionInfo}
                            onChange={onChange}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary profile-btn">
                            Add accommodation
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAccommodationForm;
