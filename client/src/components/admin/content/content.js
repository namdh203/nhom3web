import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Account from '../pages/account/account'
function Content() {
    return (
        <div className='content'>
            <Routes>
                <Route path="/account" element={<Account/>}></Route>
                <Route path="/user" element={<div>user</div>}></Route>
                <Route path="/tour" element={<div>tour</div>}></Route>
                <Route path="/destination" element={<div>destination</div>}></Route>
                <Route path="/transportation" element={<div>transportation</div>}></Route>
                <Route path="/accomodation" element={<div>accomodation</div>}></Route>
                <Route path="/dining" element={<div>dining</div>}></Route>
                <Route path="/payment" element={<div>payment</div>}></Route>
            </Routes>
        </div>
    )
}
export default Content