const body = document.body
const urls = ["https://wallpapercosmos.com/w/full/2/e/8/293782-3840x2160-desktop-4k-paris-background-image.jpg", 
                "https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg", "https://wallpapers.com/images/featured/paris-zy4x2ow5p7j5qi4a.jpg"]

let len_ = urls.length
let current = 1;

function outBackward() {
    current = current - 1
    if (current < 0) {
        current = len_ - 1
    }
    var banner = body.querySelector(".home-banner")
    banner.src = urls[current]
}

function outForward() {
    current = (current + 1) % len_
    var banner = body.querySelector(".home-banner")
    banner.src = urls[current]
}

export {outBackward, outForward}