const body = document.body

body.onload = function () {
    var rcmBlock = document.querySelectorAll('.rcm-block')
    var len = rcmBlock.length

    console.log("Show Color function")

    for (var i = 0; i < len; i++) {
        if (i % 2 === 0) {
            rcmBlock[i].classList.remove('odd')
            rcmBlock[i].classList.add('odd')
        } else {
            rcmBlock[i].classList.remove('even')
            rcmBlock[i].classList.add('even')
        }
    }
}