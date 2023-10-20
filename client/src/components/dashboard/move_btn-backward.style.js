export default function move_backward() {
    const black_layer = document.querySelector(".black-layer")
    black_layer.style.display = "block"
    const menu_btn = document.querySelector(".rcm-vertical-menu")
    menu_btn.style.animation = "move_btn_backward 1s forwards"
    const backward = document.querySelector(".move-btn_wrapper.backward")
    const forward = document.querySelector(".move-btn_wrapper.forward")
    backward.classList.add("hidden")
    forward.classList.remove("hidden")
    console.log(2)
}
