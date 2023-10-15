export default function move_forward() {
    const menu_btn = document.querySelector(".rcm-vertical-menu")
    menu_btn.style.animation = "move_btn_forward 2s forwards"
    const backward = document.querySelector(".move-btn_wrapper.backward")
    const forward = document.querySelector(".move-btn_wrapper.forward")
    backward.classList.remove("hidden")
    forward.classList.add("hidden")
    console.log(1)
}


