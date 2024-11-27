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
        "https://mega.nz/embed/nQFQnJbgenoue6JVC-oz8MXQneEloJmdm0qLK-GtKDY7YcvH0",
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
        "https://mega.nz/embed/UxgDhACT#DW0JTmehn316Q_vp-XFmUFzqV92HWa-eZFqiQtg-69Y",
        "https://mega.nz/embed/1sQywZYJ#YBD7bNn9xuhTpGxq3L_KDMgm9eK2aXQsfy911LlvFwM",
        "https://mega.nz/embed/sxQ1yI7b#kR0o1d4zIICRkLl9eqEfX0PVCNglolOF7S1BTkNt7eg",
        "https://mega.nz/embed/NsYwlRab#qUJyg-ngT5NMIpwXdDaVIehTEgFGRplzsj9DHXZ_nrM",
        "https://mega.nz/embed/U452wQzb#6Kr3A7SKADXWa6TH2UUtwLEFqpzp95P-3Lp76pkBGlA",
        "https://mega.nz/embed/o8Zl3LQL#IUVm7fW2hvWL_ABz1As6MHTX0w0FNXMss4SPWkVCePo",
        "https://mega.nz/embed/N14EzYCb#kasrFhNyMWiNq3fEVxA_rO7rX_y_Qb8yjsQT12Okcf4",
        "https://mega.nz/embed/p1BE2IrT#vNDUQ6rBHsTLUalWmJK6WCaObpVF6sT-FLfIK8eVIjE",
        "https://mega.nz/embed/KRtViZTJ#y4ETVsRYVf6gkW4uCIPWqdWgJYorsjzTSAsglvGvVks",
        "https://mega.nz/embed/3dtglT6T#eIAcvV2tvtWItVEcClXZmefylDSRctSeVHJjPrJ670c",
        "https://mega.nz/embed/TM1BlYia#4SI2Z8wtQ5U46Lkmq0RNPeuHiTRlRRNaR0Obf4hFQso",
        "https://mega.nz/embed/aRMywDoB#uYTECPHTYXjg6sg81zAfLeRsBlq6oIqwfgNnUi8eYdU",
    ],
    [
        "https://mega.nz/embed/aJNCEAAT#RhwoyU1ukDf3ZkGVMGN8vQ7IH0fph6ZvyDT0j5jVHbY",
        "https://mega.nz/embed/E9gkTT5B#HW_BvEvr15OCi9kz3VZFPaoty5Gxu7U6Mf9BcFIXZz4",
        "https://mega.nz/embed/I0wCwZyZ#D63uft7cD_bG_iJeyXhRgvL-iLF_xgriVgKRPJn5Dws",
        "https://mega.nz/embed/hwAEEABD#tU6DbVTyyv9lDA301Hy9ZusNgVImgSy895IS7vhs-X8",
        "https://mega.nz/embed/kwhGxZSA#B-alOSj8xJf-eo01oM22lhrDGDuiqXePtvdCubb58Bk",
        "https://mega.nz/embed/IlhDzCYB#m6P9oTCsMCUUyrbS0as-7bQ6pMMWa5O9qxWnb8DS5wE",
        "https://mega.nz/embed/10RRCT6Q#9GdE2glEVBME4sDkvZJpxrViXMIgvP-kKW7A7zMWQnM",
        "",
        "",
        "",
        "",
        "",
    ],
    [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
    [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
    [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
    [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
    [
        "https://mega.nz/embed/GEsGjASa#IdxS4j1cH6atmSPrMMrXe1ldwfsALLNe-aVvFFz2y-U",
        "https://mega.nz/embed/KElmhIpK#MhUe9izrT3KcxEUTPLXZIl0b7Yx6CfYN2A2PmjVfR0w",
        "https://mega.nz/embed/qFUwHASA#X74vGmXl5gTyzRoF--CBt3j7LusAjor_YlxhqRRM1vc",
        "https://mega.nz/embed/LVcFwYBS#59q9ZcBiYYXDSDfoSctuG_VhSG1f2kKqEbeL1iTh-a8",
        "https://mega.nz/embed/EhZXSY7Z#Z7igZ-nVVaSiTZxLVEgwTO0tCh2kYdr4IXekHZoWVtQ",
        "https://mega.nz/embed/xwYFiLBB#WVygkeZc8cWuQUTl8UR3LfY88XVgMQYnTlIJOHwxyOQ",
        "",
        "",
        "",
        "",
        "",
        "",
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
