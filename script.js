const totalImages = 88;  // <-- yaha bas number change karate rehna
let current = 1;

const img = document.getElementById("spinImage");

let startX = 0;

document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchmove", (e) => {
    let moveX = e.touches[0].clientX;

    if (moveX < startX - 5) {
        current++;
        if (current > totalImages) current = 1;
        img.src = `images/${current}.png`;
        startX = moveX;
    }

    if (moveX > startX + 5) {
        current--;
        if (current < 1) current = totalImages;
        img.src = `images/${current}.png`;
        startX = moveX;
    }
});
