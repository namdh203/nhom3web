import React from 'react'
import "./dashbroad.css"

export default function SearchBar() {
    return (
        <>
            <div className="search-wrapper">
                <i class="fa fa-search search-logo"></i>
                <div className="search-input_wrapper">
                    <input type='text' className="search-input" placeholder='Where do you want to go?'/>
                </div>
                {/* <button className="search-btn">Search</button> */}
            </div>
        </>
    )
}