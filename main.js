"use strict";

/* =========================================
   1. FLOATING HEARTS
========================================= */

const particlesContainer = document.getElementById("particles");

const heartSymbols = [
    "♡",
    "♥",
    "💕",
    "💗",
    "✨",
    "🌸"
];

function createFloatingHeart() {
    const heart = document.createElement("span");

    heart.className = "particle";

    heart.textContent =
        heartSymbols[
            Math.floor(Math.random() * heartSymbols.length)
        ];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 19) + "px";

    heart.style.animationDuration =
        (9 + Math.random() * 12) + "s";

    particlesContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 22000);
}

setInterval(createFloatingHeart, 650);


/* =========================================
   2. BIRTHDAY DATE LOGIN

   Correct date: 16 October 2005
   Input format: DDMMYYYY
========================================= */

const birthdayForm =
    document.getElementById("birthdayForm");

const birthdayInput =
    document.getElementById("birthdayInput");

const errorMessage =
    document.getElementById("errorMessage");

const loginScreen =
    document.getElementById("loginScreen");

const mainSite =
    document.getElementById("mainSite");

birthdayForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredDate =
        birthdayInput.value.replace(/\D/g, "");

    if (enteredDate === "16102005") {

        errorMessage.textContent =
            "Correct! Opening your surprise... 💗";

        launchConfetti(60);

        setTimeout(() => {

            loginScreen.classList.add("hidden");

            mainSite.classList.add("visible");

            document.body.classList.remove("locked");

            setTimeout(() => {
                loginScreen.style.display = "none";
            }, 850);

            showToast(
                "Welcome to your little birthday surprise! 💗"
            );

        }, 900);

    } else {

        errorMessage.textContent =
            "উফ! তারিখটা ঠিক হয়নি। আবার চেষ্টা করো, ফাতেমা! 💗";

        birthdayInput.value = "";

        birthdayInput.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-7px)" },
                { transform: "translateX(7px)" },
                { transform: "translateX(-5px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 300
            }
        );
    }
});


/* =========================================
   3. CLICK WISH
========================================= */

const clickWishBtn =
    document.getElementById("clickWishBtn");

const wishResult =
    document.getElementById("wishResult");

clickWishBtn.addEventListener("click", function () {

    wishResult.classList.toggle("show");

    if (wishResult.classList.contains("show")) {

        clickWishBtn.textContent =
            "Your Wish Is Here 💖";

        launchConfetti(45);

        wishResult.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    } else {

        clickWishBtn.textContent =
            "Click Your Wish 💝";
    }
});


/* =========================================
   4. FIRST LETTER

   Birthday letter
========================================= */

const birthdayLetter = `ফাতেমা,
শুভ জন্মদিন! ❤️
আজ ১৬ অক্টোবর, তোমার জীবনের আরও একটা নতুন অধ্যায় শুরু হলো। দেখতে দেখতে ২১ বছরে পা দিয়ে দিলে! ভাবতেই কেমন যেন লাগে, সময়টা কত দ্রুত চলে যায়। মনে হয়, এই তো সেদিন ক্লাস সিক্সে একসঙ্গে পড়তাম, আজ এতগুলো বছর পেরিয়ে গেছে।
আজ তোমার জন্মদিনে পুরোনো দিনগুলোর কথা একটু মনে পড়ছে। আজিজ স্যারের কাছে একসঙ্গে পড়া থেকে শুরু করে রেডিয়ান কোচিং সেন্টার, তারপর এসএসসি , কত স্মৃতি জমে আছে এই সময়টার সঙ্গে! তখন হয়তো বুঝতাম না, জীবনের এই সাধারণ দিনগুলোই একসময় এত সুন্দর স্মৃতি হয়ে থাকবে। সময়ের সঙ্গে অনেক কিছু বদলে গেছে, বদলেছে আমাদের জীবন, পরিস্থিতি, চিন্তাভাবনা; কিন্তু পেছনে ফেলে আসা দিনগুলোর স্মৃতিগুলো তো আর বদলে যায় না।
আমাদের মধ্যেও এমন কিছু সময় এসেছে, যখন দূরত্ব তৈরি হয়েছে, কথা বন্ধ হয়েছে, এমনকি একসময় আনফ্রেন্ড হওয়ার ঘটনাও ঘটেছে { that was not my fault . I was always right } তবে জীবনে সবকিছু সব সময় নিজের ইচ্ছামতো হয় না। কিছু ঘটনা ঘটে যায়, কিছু ভুল-বোঝাবুঝি তৈরি হয়। সেসব নিয়ে আজ আর কিছু বলতে চাই না। অতীতকে অতীতের জায়গায় রেখেই সামনে এগিয়ে যাওয়াটা বোধহয় ভালো।
আমার কাছে ভালো লাগার বিষয় হলো, এত কিছুর পরও আজ আমরা এমন একটা অবস্থানে আছি, যেখানে কোনো দ্বিধা বা অস্বস্তি ছাড়াই কথা বলতে পারি। আমার মনে হয়, এটাই অনেক কিছু। কারণ সময়ের সঙ্গে সম্পর্কের ধরন বদলাতে পারে, কিন্তু পুরোনো পরিচয় আর স্মৃতিগুলোর একটা আলাদা মূল্য সব সময়ই থেকে যায়।
যাই হোক, আজ তোমার বিশেষ দিন। তাই পুরোনো কথা বাদ দিয়ে তোমার জন্য কিছু ভালো চাওয়ার কথাই বলি।
মন থেকে দোয়া করি, তুমি জীবনে অনেক বড় হও, নিজের যোগ্যতায় ভালো একটা অবস্থানে পৌঁছাও এবং এমন কিছু করো, যা নিয়ে একদিন নিজের কাছেই গর্ব করতে পারবে। তোমার স্বপ্নগুলো পূরণ হোক, পরিশ্রম সার্থক হোক, আর জীবনের প্রতিটি গুরুত্বপূর্ণ সিদ্ধান্তে সঠিক পথটা খুঁজে পাও। জীবনে সফল হওয়ার পাশাপাশি একজন ভালো নারী হিসেবেও নিজেকে গড়ে তোলো।
সব সময় হয়তো জীবন তোমার পরিকল্পনামতো চলবে না। কখনো কঠিন সময় আসবে, কখনো নিজের ওপর বিশ্বাস রাখাটাও কঠিন মনে হবে। তবুও যেন নিজের ওপর বিশ্বাস হারিয়ে না ফেলো। ধৈর্য ধরে চেষ্টা করে যেয়ো। মনে রেখো, জীবনে ভালো কিছু অর্জন করতে সময় লাগলেও আন্তরিক চেষ্টা কখনোই মূল্যহীন নয়।
তোমার জীবনে এমন মানুষ থাকুক, যারা তোমাকে সত্যিকার অর্থে বুঝবে, তোমার ভালো চাইবে এবং কঠিন সময়েও পাশে থাকবে। তোমার বাবা ভাই বোন ভালো থাকুক, তুমি সুস্থ থাকো, মানসিক শান্তিতে থাকো এবং প্রতিদিনের ছোট ছোট আনন্দগুলো উপভোগ করতে শেখো।
আর একটা কথা, জীবনের এই নতুন বয়সে এসে নিজের জন্যও একটু সময় রেখো। শুধু ভবিষ্যৎ নিয়ে চিন্তা করতে গিয়ে বর্তমানের সুন্দর মুহূর্তগুলো হারিয়ে ফেলো না। অনেক দূর এগিয়ে যাও, নিজের স্বপ্ন পূরণ করো, তবে সেই পথচলায় নিজের ভালো থাকাটাকেও গুরুত্ব দিয়ো।
ক্লাস সিক্স থেকে শুরু হওয়া এই পরিচয়ের সঙ্গে যে এত বছরের স্মৃতি জড়িয়ে যাবে, সেটা তখন ভাবিনি। জানি না, ভবিষ্যতে আমাদের জীবন কোন দিকে যাবে, কে কতটা ব্যস্ত হয়ে পড়ব কিংবা যোগাযোগ কতটা থাকবে। তবে চাই, তোমার জীবনের পরবর্তী দিনগুলো আরও সুন্দর হোক। তুমি তোমার কাঙ্ক্ষিত লক্ষ্যে পৌঁছাও এবং জীবনের প্রতিটি ধাপে আরও পরিণত, আত্মবিশ্বাসী ও সফল হয়ে ওঠো।
শুভ ২১তম জন্মদিন, ফাতেমা! 🎂❤️
তোমার জন্য অনেক অনেক শুভকামনা ও দোয়া রইল। আল্লাহ তোমার জীবনে বরকত দান করুন, তোমার নেক ইচ্ছাগুলো পূরণ করুন এবং তোমাকে জীবনের প্রতিটি ক্ষেত্রে সফলতা ও শান্তি দান করুন।
ভালো থেকো, নিজের যত্ন নিয়ো, আর জীবনে অনেক দূর এগিয়ে যেয়ো।
ইতি,
তোমার দীর্ঘদিনের পরিচিত , আনফ্রেন্ড হওয়া এক বন্ধু
শরিফ ।`;


/* =========================================
   5. SECOND LETTER

   Dedicated letter
========================================= */

const dedicatedLetter = `ফাতেমা,
এই চিঠিটা অন্য জনকে dedicate করে লেখা । আশা করি জানেন কার কথা বলছি। জানি, এই সময়টা কতটা কঠিন, সেটা হয়তো কোনো কথার মাধ্যমেই বোঝানো সম্ভব নয়। আন্টির কথা মনে পড়লে এখনো বিশ্বাস হতে চায় না যে, তিনি আর এই পৃথিবীতে নেই। আন্টি আমাকে যে পরিমাণ আদর করতেন, সেই স্মৃতিগুলো আমার কাছেও অনেক মূল্যবান। তাঁর স্নেহ আর ভালোবাসার কথা মনে পড়লে মনটা খারাপ হয়ে যায়। বুক চিপ দিয়ে উঠে। একজন introvert হিসেবে হয়ত প্রকাশ করতে পারি না।
জীবনের কিছু কষ্ট আছে, যা কোনো সান্ত্বনার কথাতেই দূর হয় না। তবুও একটা কথাই বলতে চাই, নিজেকে শক্ত রেখো । জানি, মাকে হারানোর শূন্যতা কখনো পূরণ হওয়ার নয়। তবে আন্টির ভালোবাসা, তাঁর স্মৃতি আর তাঁর শেখানো বিষয়গুলো সব সময় নিজের কাছে ধারণ করার চেষ্টা করবা ।
আল্লাহ যেন আন্টিকে ক্ষমা করে দেন এবং তাঁকে জান্নাতুল ফেরদৌস নসিব করেন।
দোয়া করি, ধীরে ধীরে এই শোক কাটিয়ে উঠতে পারো । নিজের যত্ন নিয়ো । এই লেটার টি শুধু আন্টিকে dedicate করে লিখা।
আল্লাহ আন্টিকে জান্নাতবাসী করুন। আমিন। 🤍`;


/* =========================================
   6. OPEN AND CLOSE LETTERS
========================================= */

const letterModal =
    document.getElementById("letterModal");

const paperTitle =
    document.getElementById("paperTitle");

const paperContent =
    document.getElementById("paperContent");

const closeX =
    document.getElementById("closeX");

const closeLetterBtn =
    document.getElementById("closeLetterBtn");

let lastFocusedElement = null;

function openLetter(letterType) {

    lastFocusedElement = document.activeElement;

    if (letterType === "birthdayLetter") {

        paperTitle.textContent =
            "A Letter for Fatema 💗";

        paperContent.textContent =
            birthdayLetter;

    } else if (letterType === "dedicatedLetter") {

        paperTitle.textContent =
            "Dedicated for Someone 🤍";

        paperContent.textContent =
            dedicatedLetter;

    } else {

        return;
    }

    letterModal.classList.add("open");

    letterModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    document.querySelector(".letter-paper").scrollTop = 0;

    closeX.focus();
}

function closeLetter() {

    letterModal.classList.remove("open");

    letterModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

closeX.addEventListener("click", closeLetter);

closeLetterBtn.addEventListener("click", closeLetter);

letterModal.addEventListener("click", function (event) {

    if (event.target === letterModal) {
        closeLetter();
    }
});

document.addEventListener("keydown", function (event) {

    if (
        event.key === "Escape" &&
        letterModal.classList.contains("open")
    ) {
        closeLetter();
    }
});


/* =========================================
   7. CONFETTI
========================================= */

function launchConfetti(amount = 70) {

    const symbols = [
        "💗",
        "💕",
        "✨",
        "🌸",
        "♥",
        "🎉",
        "💖"
    ];

    for (let i = 0; i < amount; i++) {

        setTimeout(() => {

            const item = document.createElement("span");

            item.className = "confetti";

            item.textContent =
                symbols[
                    Math.floor(Math.random() * symbols.length)
                ];

            item.style.left =
                Math.random() * 100 + "vw";

            item.style.fontSize =
                (12 + Math.random() * 19) + "px";

            item.style.animationDuration =
                (3 + Math.random() * 4) + "s";

            document.body.appendChild(item);

            setTimeout(() => {
                item.remove();
            }, 7500);

        }, Math.random() * 600);
    }
}


/* =========================================
   8. FINAL SURPRISE
========================================= */

const finalSurpriseBtn =
    document.getElementById("finalSurpriseBtn");

finalSurpriseBtn.addEventListener("click", function () {

    launchConfetti(120);

    showToast(
        "May Allah bless you always, Fatema! ❤️"
    );

    finalSurpriseBtn.textContent =
        "Made with Love for You 💗";

    setTimeout(() => {

        finalSurpriseBtn.textContent =
            "One Last Surprise ✨";

    }, 3500);
});


/* =========================================
   9. SCROLL NAVIGATION
========================================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =========================================
   10. TOAST NOTIFICATION
========================================= */

let toastTimer;

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);
}
