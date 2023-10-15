export default function move_backward() {
    const menu_btn = document.querySelector(".rcm-vertical-menu")
    menu_btn.style.animation = "move_btn_backward 2s backwards"
    const backward = document.querySelector(".move-btn_wrapper.backward")
    const forward = document.querySelector(".move-btn_wrapper.forward")
    backward.classList.add("hidden")
    forward.classList.remove("hidden")
    console.log(2)
}
