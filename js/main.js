console.log("Flowers for You initialized.");


/* ========================================
   ELEMENTS
======================================== */

const flowerButton = document.getElementById("flower-button");
const seed = document.getElementById("seed");
const tree = document.getElementById("tree");

const introTitle = document.getElementById("intro-title");
const introHint = document.querySelector(".intro-hint");

const counterSection = document.getElementById("counter-section");

const counterDays = document.getElementById("counter-days");
const counterHours = document.getElementById("counter-hours");
const counterMinutes = document.getElementById("counter-minutes");
const counterSeconds = document.getElementById("counter-seconds");

const finalMessage = document.getElementById("final-message");

/* ========================================
   LOVE START DATE
======================================== */

const loveStartDate = new Date(2025, 1, 14);


/* ========================================
   INTRO → SEED
======================================== */

flowerButton.addEventListener("click", () => {

    // Prevent clicking the flower more than once
    if (flowerButton.classList.contains("is-growing")) {
        return;
    }


    // Start flower disappearing animation
    flowerButton.classList.add("is-growing");


    // Hide the introduction text
    introTitle.classList.add("is-hidden");
    introHint.classList.add("is-hidden");


    // Show the seed after the flower disappears
    setTimeout(() => {

        seed.classList.add("is-visible");


        // Start growing the tree
        setTimeout(() => {

            tree.classList.add("is-growing");


            /* ========================================
               FLOWERS START FALLING
            ======================================== */

            setTimeout(() => {

                const fallingFlowers = [
                    document.querySelector(".flower-3"),
                    document.querySelector(".flower-8"),
                    document.querySelector(".flower-13"),
                    document.querySelector(".flower-17"),
                    document.querySelector(".flower-21"),
                    document.querySelector(".flower-24")
                ];


                fallingFlowers.forEach((flower) => {

                    if (flower) {
                        flower.classList.add("is-falling");
                    }

                });

            }, 10500);


            /* ========================================
               CAMERA ZOOM OUT
            ======================================== */

            setTimeout(() => {

                tree.classList.add("is-zoomed");


                /* ========================================
                   SHOW LOVE COUNTER
                ======================================== */

                setTimeout(() => {

                    counterSection.classList.add("is-visible");


                    /* ========================================
                       SHOW FINAL MESSAGE
                    ======================================== */

                    setTimeout(() => {

                        finalMessage.classList.add("is-visible");

                    }, 3000);

                }, 2500);

            }, 19000);

        }, 1000);

    }, 900);

});
/* ========================================
   LOVE COUNTER
======================================== */

function updateLoveCounter() {

    const now = new Date();

    const difference = now - loveStartDate;

    const totalSeconds = Math.floor(
        difference / 1000
    );


    const days = Math.floor(
        totalSeconds / 86400
    );

    const hours = Math.floor(
        (totalSeconds % 86400) / 3600
    );

    const minutes = Math.floor(
        (totalSeconds % 3600) / 60
    );

    const seconds = totalSeconds % 60;


    counterDays.textContent = days;
    counterHours.textContent = String(hours).padStart(2, "0");
    counterMinutes.textContent = String(minutes).padStart(2, "0");
    counterSeconds.textContent = String(seconds).padStart(2, "0");

}

/* ========================================
   START COUNTER
======================================== */

setInterval(updateLoveCounter, 1000);

updateLoveCounter();