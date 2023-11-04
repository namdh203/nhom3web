export default function move_forward() {
    const black_layer = document.querySelector(".black-layer")
    black_layer.style.display = "none"
    const menu_btn = document.querySelector(".rcm-vertical-menu")
    menu_btn.style.animation = "move_btn_forward 1s forwards"
    const backward = document.querySelector(".move-btn_wrapper.backward")
    const forward = document.querySelector(".move-btn_wrapper.forward")
    backward.classList.remove("hidden")
    forward.classList.add("hidden")
    console.log(1)
}


