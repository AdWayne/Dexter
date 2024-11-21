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
    ],
    [
        "https://mega.nz/embed/6BcCBA4Z#UVPGv5nujxe4HP__sT_hr3H4s5gvb4iKY3o0aaDCkFU",
        "https://mega.nz/embed/eRkW0IrA#OLGnefpAszh37NAjEtVrGe0W9Kfb1RthvDVGIWsLJJs",
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

function openShareLinks() {
    const siteUrl = "https://adwayne.github.io/Dexter/";
    const encodedUrl = encodeURIComponent(siteUrl);

    const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=Check+this+out!`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`,
        whatsapp: `https://api.whatsapp.com/send?text=${encodedUrl}`,
    };

    Object.values(urls).forEach((url) => {
        if (url) window.open(url, "_blank");
    });
}

document.getElementById("shareButton").addEventListener("click", openShareLinks);

updateVideoCategory();
changeVideo();
