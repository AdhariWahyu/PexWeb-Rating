// JavaScript for the first star widget
const btn1 = document.querySelector("button")
const post1 = document.querySelector(".post")
const widget1 = document.querySelector(".star-widget")
const editBtn1 = document.querySelector(".edit")
btn1.onclick = () => {
    widget1.style.display = "none"
    post1.style.display = "block"
    editBtn1.onclick = () => {
        widget1.style.display = "block"
        post1.style.display = "none"
    }
    return false
}

// JavaScript for the second star widget
const btn2 = document.querySelector(".container:nth-child(2) button")
const post2 = document.querySelector(".container:nth-child(2) .post")
const widget2 = document.querySelector(
    ".container:nth-child(2) .star-widget"
)
const editBtn2 = document.querySelector(".container:nth-child(2) .edit")
btn2.onclick = () => {
    widget2.style.display = "none"
    post2.style.display = "block"
    editBtn2.onclick = () => {
        widget2.style.display = "block"
        post2.style.display = "none"
    }
    return false
}

// JavaScript for the third star widget
const btn3 = document.querySelector(".container:nth-child(3) button")
const post3 = document.querySelector(".container:nth-child(3) .post")
const widget3 = document.querySelector(
    ".container:nth-child(3) .star-widget"
)
const editBtn3 = document.querySelector(".container:nth-child(3) .edit")
btn3.onclick = () => {
    widget3.style.display = "none"
    post3.style.display = "block"
    editBtn3.onclick = () => {
        widget3.style.display = "block"
        post3.style.display = "none"
    }
    return false
}

// JavaScript for the fourth star widget
const btn4 = document.querySelector(".container:nth-child(4) button")
const post4 = document.querySelector(".container:nth-child(4) .post")
const widget4 = document.querySelector(
    ".container:nth-child(4) .star-widget"
)
const editBtn4 = document.querySelector(".container:nth-child(4) .edit")
btn4.onclick = () => {
    widget4.style.display = "none"
    post4.style.display = "block"
    editBtn4.onclick = () => {
        widget4.style.display = "block"
        post4.style.display = "none"
    }
    return false
}