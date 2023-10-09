import React from 'react';

export default function showAuth() {
    var auth = document.querySelector(".auth-wrapper")
    auth.classList.remove("hidden-element")
    auth.style.display = "flex"
}