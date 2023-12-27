import React, { useState } from 'react';
import './addAccountForm.css'
import { useNavigate } from "react-router-dom";
import { addCustomer } from './accountFunction';

const AddAccountForm = () => {
    const [newAccount, setNewAccount] = useState({
        name: '',
        cardNo: '',
        address: '',
        phoneNumber: '',
        email: '',
        password: '',
        passport: '',
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!newAccount.name.trim() || !newAccount.email.trim() || !newAccount.password.trim()) {
            alert('Name & Email & Password are required fields');
            return;
        }

        addCustomer(newAccount).then (res => {
            alert(res.msg)
            setNewAccount({
                name: '',
                cardNo: '',
                address: '',
                phoneNumber: '',
                email: '',
                password: ' ',
                passport: '',
            });
            navigate("/admin/account")
        })
    };

    return (
        <div className="add-account-detail-container">
            <div className="col col-md-9 col-12 add-account-detail">
                <h2>Add Account</h2>
                <form className="user-profile_form" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter name"
                            value={newAccount.name}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>CardNo</label>
                        <input
                            type="text"
                            className="form-control"
                            name="cardNo"
                            placeholder="Enter card no"
                            value={newAccount.cardNo}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Address</label>
                        <input
                            type="text"
                            className="form-control"
                            name="address"
                            placeholder="Enter address"
                            value={newAccount.address}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="phoneNumber"
                            placeholder="Enter phone number"
                            value={newAccount.phoneNumber}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter email address"
                            value={newAccount.email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="text"
                            className="form-control"
                            name="password"
                            placeholder="Enter password"
                            value={newAccount.password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Passport</label>
                        <input
                            type="text"
                            className="form-control"
                            name="passport"
                            placeholder="Enter passport"
                            value={newAccount.passport}
                            onChange={onChange}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary profile-btn">
                            Add Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAccountForm;
