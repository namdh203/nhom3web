import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './account.css'
import { deleteCustomer } from "./accountFunction";

const DeleteAccountForm = () => {
    const [oldAccount, setOldAccount] = useState({
        email: ''
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setOldAccount({...oldAccount, [e.target.name] : e.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!oldAccount.email.trim()) {
            alert("Email is required field");
            return;
        }

        deleteCustomer(oldAccount).then (res => {
            alert(res.msg);
            setOldAccount({
                email: ''
            });
            navigate("/admin/account")
        })
        .catch(() => {
            alert('Customer does not exists');
        });
    };

    return (
        <div className="delete-account-detail-container">
            <div className="col col-md-9 col-12 add-account-detail">
                <h2>Delete Account</h2>
                <form className="user-profile_form" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter email address"
                            value={oldAccount.email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary profile-btn">
                            Delete Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeleteAccountForm;