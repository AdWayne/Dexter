document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
        fadeInElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible) {
                element.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

const videoPlayer = document.getElementById("videoPlayer");
const videoCategory = document.getElementById("videoCategory");
const seasonSelect = document.getElementById("seasonSelect");

const videosBySeason = [
    [
        "https://mega.nz/embed/SUNgHSZK#7gzHGI2t8Oq2xBjuM3NBTwkKnABZsUSsocRZaENOG4Y",
        "https://mega.nz/embed/nQFQnJbB#-genoue6JVC-oz8MXQneEloJmdm0qLK-GtKDY7YcvH0",
        "https://mega.nz/embed/rBdQ3aQA#9kO394xMeCB2pzb6b49Tzn9GXBW0clxbom8qWsQ0h-I",
        "https://mega.nz/embed/zIUzWJwI#o0Ani9VIosZxjBOFv7RRp96PRTR-R0P4JmWI83C0uwg",
        "https://mega.nz/embed/qF1G1T6I#0mOXNsK3iKXh6EvDbIFDFF2xNojqZ7DiDohwiyLhqLw",
        "https://mega.nz/embed/DJ8lgB4I#oo7e_VaQ8VLbFs9W2dZKJbXzoLf4rfjNdkMmNA7uJLc",
        "https://mega.nz/embed/rQd2za7Q#Q5RQNgs-KlgjpjHSYTgR8M1DZnfA1nJO6YHczeDNJSk",
        "https://mega.nz/embed/7dcAHSaZ#cipe_x3mXcEgZZJeTjFbsfzBOx8ZqYS_2L_WZjVr6Pw",
        "https://mega.nz/embed/GcswRBiL#rKKI8YF5l5EKZ9BzbMxJFAv3AIdV0nqCPzLOzt6_rww",
        "https://mega.nz/embed/zIVDkR6B#8mrbSpKdfBmO-rPVE1NBG0DzellnWgnCOLJ9L48r58c",
        "https://mega.nz/embed/PcNCxb4T#-QTrs81mvgM7-Rtx_jLRopHYjSbZbjCw5DzHOyy9uro",
        "https://mega.nz/embed/zJ12kBrT#kJsC40ksuuN8h61CMi1mvwdNCWeQcuQBYHuVemi14og",
    ],
    [
        "https://mega.nz/embed/nFFyUQIb#Af1HIR-It10s54u2v-MuBCJAjDBpyw7Wlh0IzwnPe3U",
        "https://mega.nz/embed/uZ10kR7Z#WpEtwqDE8lgCNNWBFEbW3-27BNfm9jg9BU4Ozgy6LC4",
        "",
        "",
        "",
        "",
        "",
        "https://mega.nz/embed/B9oTHY4R#sXkrdVnk4wDT7AO3Tg4vqSHR5BjOoCbMitj-ps7u_PI",
        "https://mega.nz/embed/Ut5znaJS#lmX2uz0VvWUbgLPTRmFw94GjIST6-RUx-GmjVevrZIQ",
        "",
        "",
        "",
    ],
    [
       
    ],
    [],
    [],
    [],
    [],
    [
        "https://mega.nz/embed/WAl2UYra#vgUH2MHVYPBSuPCJGbv84dwK7mat3HSz3v-krc4cKUk",
    ],
];

let currentSeason = 0;
let currentEpisode = 0;

function updateVideoCategory() {
    videoCategory.innerHTML = "";
    const seasonVideos = videosBySeason[currentSeason];

    if (seasonVideos && seasonVideos.length) {
        seasonVideos.forEach((video, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = `Эпизод ${index + 1}`;
            videoCategory.appendChild(option);
        });
        videoCategory.selectedIndex = currentEpisode; 
    } else {
        const noVideoOption = document.createElement("option");
        noVideoOption.textContent = "Нет доступных эпизодов";
        noVideoOption.disabled = true;
        videoCategory.appendChild(noVideoOption);
    }
}

function changeVideo() {
    const selectedEpisode = videoCategory.selectedIndex;
    if (selectedEpisode >= 0 && videosBySeason[currentSeason]?.[selectedEpisode]) {
        currentEpisode = selectedEpisode;
        videoPlayer.src = videosBySeason[currentSeason][currentEpisode];
    } else {
        console.error("Выбранный эпизод отсутствует.");
    }
}

function previousVideo() {
    if (currentEpisode > 0) {
        currentEpisode--;
        videoCategory.selectedIndex = currentEpisode;
        changeVideo();
    }
}

function nextVideo() {
    if (currentEpisode < videosBySeason[currentSeason].length - 1) {
        currentEpisode++;
        videoCategory.selectedIndex = currentEpisode;
        changeVideo();
    }
}

function playSeason(seasonIndex) {
    if (seasonIndex >= 0 && seasonIndex < videosBySeason.length) {
        currentSeason = seasonIndex;
        currentEpisode = 0;
        updateVideoCategory();
        changeVideo();
    } else {
        console.error("Неверный индекс сезона:", seasonIndex);
    }
}

seasonSelect.addEventListener("change", () => {
    playSeason(Number(seasonSelect.value));
});

videoCategory.addEventListener("change", changeVideo);

const seasonImages = document.querySelectorAll(".season-img");
seasonImages.forEach((img) => {
    img.addEventListener("click", (event) => {
        const seasonIndex = event.target.getAttribute("data-season");
        seasonSelect.value = seasonIndex; 
        playSeason(Number(seasonIndex));
    });
});

const progressBars = document.querySelectorAll(".progress");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const percent = progressBar.getAttribute("data-percent");
            progressBar.style.width = `${percent}%`;
        }
    });
});

progressBars.forEach((bar) => observer.observe(bar));

function openShareLink(platform) {
    const siteUrl = "https://adwayne.github.io/Dexter/";
    const encodedUrl = encodeURIComponent(siteUrl);

    const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=Check+this+out!`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`,
        whatsapp: `https://api.whatsapp.com/send?text=${encodedUrl}`,
    };

    const url = urls[platform];
    if (url) {
        window.open(url, "_blank", "noopener,noreferrer");
    }
}

document.querySelector(".share-menu").addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        const platform = event.target.getAttribute("data-platform");
        openShareLink(platform);
        event.preventDefault();
    }
});


updateVideoCategory();
changeVideo();
