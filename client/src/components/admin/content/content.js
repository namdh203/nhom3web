import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Account from '../pages/account/account'
import Tour from '../pages/tour/tour'
import Destination from '../pages/destination/destination';
import Transportation from '../pages/transportation/transportation';
import Accommodation from '../pages/accomodation/accommodation';
import Restaurant from '../pages/restaurant/restaurant';

import AddAccountForm from '../pages/account/addAccountForm';
import DeleteAccountForm from '../pages/account/deleteAccountForm';

import "./content.css"

function Content() {
    return (
        <div className='content'>
            <Routes>
                <Route path="/account" element={<Account/>}></Route>
                <Route path="/account/add-account" element={<AddAccountForm/>}></Route>
                <Route path="/account/delete-account" element={<DeleteAccountForm/>}></Route>

                <Route path="/tour" element={<Tour/>}></Route>
                <Route path="/destination" element={<Destination/>}></Route>
                <Route path="/transportation" element={<Transportation/>}></Route>
                <Route path="/accommodation" element={<Accommodation/>}></Route>
                <Route path="/dining" element={<Restaurant/>}></Route>
                <Route path="/payment" element={<div>payment</div>}></Route>
            </Routes>
        </div>
    )
}
export default Content