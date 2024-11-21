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
        "https://mega.nz/embed/6BcCBA4Z#UVPGv5nujxe4HP__sT_hr3H4s5gvb4iKY3o0aaDCkFU",
        "https://mega.nz/embed/eRkW0IrA#OLGnefpAszh37NAjEtVrGe0W9Kfb1RthvDVGIWsLJJs",
        "https://mega.nz/embed/LBllWBhS#9ubD52hcjGqTLP72AG283OhgXeSFp8W9Mi66FtJPIhM",
        "https://mega.nz/embed/aU0miBrT#zWfk5t9yPzDGYdVrgO2G7CbDWpGFmdO8HehNyaVBLBU",
        "https://mega.nz/embed/HFcCTBgL#2Va4_WHuqZ-Xds2wLqkyVHExgQBHLuQUgvM-WWpcuUQ",
        "https://mega.nz/embed/vE83VaST#kbAolsZVdbikirFPwO5e2zdPFr4TZ4elNYw6hrcNJkI",
        "https://mega.nz/embed/CdczGZSB#O9JK8uQFmkZsQgzTIckKi8mmMfy3MGfzZLviTprNJno",
        "https://mega.nz/embed/GM8H1ZyY#GVb56fbAxXI36BcVJXmUzlsAhPmx8ziKWdj2nWIxSGQ",
        "https://mega.nz/embed/OcNzlAZK#oavKcmY7-4Mf8pGICnc2wFg1RBENe57oOpfOSPudK1A",
        "https://mega.nz/embed/PcNUgSxb#M5mHf4gTMn7Vt233BkSfz6H7YEzcsDIQbq1EJuJV4J8",
        "https://mega.nz/embed/yN8yVZhQ#EP4k7-aylvYrYypWuj7Jx6Pzbp5rj9cOXKZX4AgvZFQ",
        "https://mega.nz/embed/LI8RBQgC#kNZ2n5pPrd4fGIQz0LGuqrImJYXwwgu8onzTmxJY9OQ",
    ],
    [

    ],
    [],
    [],
    [],
    [],
    []
];

let currentSeason = 0;
let currentEpisode = 0;

function updateVideoCategory() {
    videoCategory.innerHTML = "";
    videosBySeason[currentSeason].forEach((video, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = `Эпизод ${index + 1}`;
        videoCategory.appendChild(option);
    });
    videoCategory.selectedIndex = currentEpisode; 
}

function changeVideo() {
    const selectedEpisode = videoCategory.selectedIndex;
    if (selectedEpisode >= 0 && selectedEpisode < videosBySeason[currentSeason].length) {
        currentEpisode = selectedEpisode;
        videoPlayer.src = videosBySeason[currentSeason][currentEpisode];    } else {
        console.error("Selected episode out of range.");
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
        console.error("Invalid season index:", seasonIndex);
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

const progressBars = document.querySelectorAll('.progress');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const percent = progressBar.getAttribute('data-percent');
        progressBar.style.width = percent + '%';
      }
    });
  });

  progressBars.forEach((bar) => observer.observe(bar));

function openShareLinks() {
    const urls = [
      "https://www.facebook.com",
      "https://www.twitter.com",
      "https://www.linkedin.com",
      "https://plus.google.com",
      "https://www.whatsapp.com",
      "https://www.instagram.com"
    ];
    
    urls.forEach((url) => {
      window.open(url, "_blank");
    });
}

updateVideoCategory();
changeVideo();