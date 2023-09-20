// first star widget
const btn1 = document.querySelector("#star-widget-1 button");
const post1 = document.querySelector("#star-widget-1 .post");
const widget1 = document.querySelector("#star-widget-1");
const editBtn1 = document.querySelector("#star-widget-1 .edit");

btn1.onclick = () => {
    widget1.style.display = "none";
    post1.style.display = "block";
    editBtn1.onclick = () => {
        widget1.style.display = "block";
        post1.style.display = "none";
    }

    return false;
}

// second star widget
const btn2 = document.querySelector("#star-widget-2 button");
const post2 = document.querySelector("#star-widget-2 .post");
const widget2 = document.querySelector("#star-widget-2");
const editBtn2 = document.querySelector("#star-widget-2 .edit");


btn2.onclick = () => {
    widget2.style.display = "none";
    post2.style.display = "block";
    editBtn2.onclick = () => {
        widget2.style.display = "block";
        post2.style.display = "none";
    }

    return false;
}

// third star widget
const btn3 = document.querySelector("#star-widget-3 button");
const post3 = document.querySelector("#star-widget-3 .post");
const widget3 = document.querySelector("#star-widget-3");
const editBtn3 = document.querySelector("#star-widget-3 .edit");



btn3.onclick = () => {
    widget3.style.display = "none";
    post3.style.display = "block";
    editBtn3.onclick = () => {
        widget3.style.display = "block";
        post3.style.display = "none";
    }

    return false;
}

// fourth star widget

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('ratingForm');
    const popup = document.getElementById('popup');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting

        // Show the popup
        popup.style.display = 'block';

        // Hide the popup after a few seconds (e.g., 3 seconds)
        setTimeout(function () {
            popup.style.display = 'none';
        }, 3000); // 3000 milliseconds (3 seconds)
    });
});

const btn4 = document.querySelector("#star-widget-4 button");
const post4 = document.querySelector("#star-widget-4 .post");
const widget4 = document.querySelector("#star-widget-4");
const editBtn4 = document.querySelector("#star-widget-4 .edit");


btn4.onclick = () => {
    widget4.style.display = "none";
    post4.style.display = "block";
    editBtn4.onclick = () => {
        widget4.style.display = "block";
        post4.style.display = "none";
    }
    
    return false;
}
