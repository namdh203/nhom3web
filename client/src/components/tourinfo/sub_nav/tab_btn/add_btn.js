function clicked(addClass) {
    const body = document.body
    const sub_navs = body.querySelectorAll(".sub-nav_tab")
    for (let i = 0; i < sub_navs.length; i++) {
        sub_navs[i].classList.remove("chosen")
        if (sub_navs[i].classList.contains(addClass)) {
            sub_navs[i].classList.add("chosen")
        }
    }
    // console.log(addClass)
}

function goIntro() {
    console.log("ngu")
    const body = document.body
    const intro = body.querySelector(".intro-wrapper")
    intro.style.display = "block"
    const desc = body.querySelector(".tour-desc_wrapper")
    desc.style.display = "none"
    const sche = body.querySelector(".tour-detail_wrapper")
    sche.style.display = "none"
}

function goDesc() {
    const body = document.body
    const intro = body.querySelector(".intro-wrapper")
    intro.style.display = "none"
    const desc = body.querySelector(".tour-desc_wrapper")
    desc.style.display = "block"
    const sche = body.querySelector(".tour-detail_wrapper")
    sche.style.display = "none"
}

function goSche() {
    const body = document.body
    const intro = body.querySelector(".intro-wrapper")
    intro.style.display = "none"
    const desc = body.querySelector(".tour-desc_wrapper")
    desc.style.display = "none"
    const sche = body.querySelector(".tour-detail_wrapper")
    sche.style.display = "block"
}

export {clicked, goIntro, goDesc, goSche};