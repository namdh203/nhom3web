import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Account from '../pages/account/account'
import Tour from '../pages/tour/tour'
import Destination from '../pages/destination/destination';
import Transportation from '../pages/transportation/transportation';
import Accommodation from '../pages/accomodation/accommodation';
import Activity from '../pages/activity/activity';
import Restaurant from '../pages/restaurant/restaurant';
import Payment from "../pages/user_history/user_history"

import AddAccountForm from '../pages/account/addAccountForm';
import DeleteAccountForm from '../pages/account/deleteAccountForm';

import AddTourForm from '../pages/tour/addTourForm';
import DeleteTourForm from '../pages/tour/deleteTourForm';
import EditTourForm from '../pages/tour/editTourForm';

import AddTransportationForm from '../pages/transportation/addTransportation';
import DeleteTransportationForm from '../pages/transportation/deleteTransportation';

import AddAccommodationForm from '../pages/accomodation/addAccomodationForm';
import DeleteAccommodationForm from '../pages/accomodation/deleteAccomodationForm';

import AddActivityForm from '../pages/activity/addActivityForm';
import DeleteActivityForm from '../pages/activity/deleteActivityForm';

import AddDestinationForm from '../pages/destination/addDestination';
import DeleteDestinationForm from '../pages/destination/deleteDestination';

import AddRestaurantForm from '../pages/restaurant/addRestaurantForm';
import DeleteRestaurantForm from '../pages/restaurant/deleteRestaurantForm';

import "./content.css"

function Content() {
    return (
        <div className='content'>
            <Routes>
                <Route path="/account" element={<Account/>}></Route>
                <Route path="/account/add-account" element={<AddAccountForm/>}></Route>
                <Route path="/account/delete-account" element={<DeleteAccountForm/>}></Route>

                <Route path="/tour" element={<Tour/>}></Route>
                <Route path="/tour/add-tour" element={<AddTourForm/>}></Route>
                <Route path="/tour/delete-tour" element={<DeleteTourForm/>}></Route>
                <Route path="/tour/edit-tour/:tourId" element={<EditTourForm/>}></Route>

                <Route path="/destination" element={<Destination/>}></Route>
                <Route path="/destination/add-destination" element={<AddDestinationForm/>}></Route>
                <Route path="/destination/delete-destination" element={<DeleteDestinationForm/>}></Route>


                <Route path="/transportation" element={<Transportation/>}></Route>
                <Route path="/transportation/add-transportation" element={<AddTransportationForm/>}></Route>
                <Route path="/transportation/delete-transportation" element={<DeleteTransportationForm/>}></Route>

                <Route path="/accommodation" element={<Accommodation/>}></Route>
                <Route path="/accommodation/add-accommodation" element={<AddAccommodationForm/>}></Route>
                <Route path="/accommodation/delete-accommodation" element={<DeleteAccommodationForm/>}></Route>

                <Route path="/activity" element={<Activity/>}></Route>
                <Route path="/activity/add-activity" element={<AddActivityForm/>}></Route>
                <Route path="/activity/delete-activity" element={<DeleteActivityForm/>}></Route>

                <Route path="/dining" element={<Restaurant/>}></Route>
                <Route path="/dining/add-restaurant" element={<AddRestaurantForm/>}></Route>
                <Route path="/dining/delete-restaurant" element={<DeleteRestaurantForm/>}></Route>

                <Route path="/payment" element={<Payment />}></Route>
            </Routes>
        </div>
    )
}
export default Content