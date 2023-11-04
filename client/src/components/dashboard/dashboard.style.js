import $ from 'jquery';

export default function showAuth() {
    let auth = document.querySelector(".auth-wrapper")
    auth.classList.remove("hidden-element")
    auth.style.display = "flex"
    // $(".auth-inner").parent().siblings().not(".navbar.sidebar").css("opacity", "0.4");
    const black_layer = document.querySelector(".black-layer")
    black_layer.style.display = "block"
}