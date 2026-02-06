const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const loveFill = document.getElementById("loveFill")
const popup = document.getElementById("popup");

yesBtn.addEventListener("click",()=> {
    response.textContent = "Nilijua tuh huwezi niangusha 😌💖 best choice ever!";

    let love = 0;
    const interval = setInterval(() => {
        love += 5;
        loveFill.style.width = love + "%";

        if (love >= 100) {
            clearInterval(interval);
            popup.style.display = "block";
            starHearts();
        }
    }, 50);
});


noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
    response.textContent = "We wacha bana....click tena vizuri!";
});

function closePopup () {
    popup.style.display = "none";
}

function starHearts () {
    setInterval( () => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";

        document.body.appendChild(heart);

        setTimeout (() => {
            heart.remove();
        }, 4000);
    }, 300);
}