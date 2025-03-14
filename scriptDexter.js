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
videoPlayer.scrollIntoView({ behavior: "smooth" });

const videosBySeason = [
    [
        "https://mega.nz/embed/YhBzRaLJ#1p8oox5HGeYaVp2txiz44KlotSpFX-xh-ITPxRJypzA",
        "https://mega.nz/embed/CMtEmTzb#iojw_F2XQ8dfkIQh0_uDM0zWcMq99CdK6PVIhXmVoIQ",
        "https://mega.nz/embed/vcNFzZ7T#wuxWg1wRSBY4-0vEV2hkwshDqKJ31uV2mKAmYOEM4nQ",
        "https://mega.nz/embed/zZMUnBIY#n-IcfZGkxc24p9m530dwDfDjNldJubjhYvCjGAWudWw",
        "https://mega.nz/embed/6F0EQCxA#YLSdOpbfwKk9WsB4SsXeyOO5jhOeCZAMYKdxMvil8z8",
        "https://mega.nz/embed/WZEAFRCS#ur-Zw-aZ7a0uMUmV_8Cm4xHmtosCxhrBBNHJuLTP2dU",
        "https://mega.nz/embed/IwpWkZKa#amRVoXv8HSG3igDnOdIx8mPzjzepLEBWnpJr2DZNYe4",
        "https://mega.nz/embed/yAljHaQC#21b5DbNRRxutX_ilGzfBWzb78S25s01Y7C6XCA8PaIU",
        "https://mega.nz/embed/CAE0wIKI#mlTu7CkrycSWBbTkFRo7sGKRpF_cvhQ1yFfn4tYI_v4",
        "https://mega.nz/embed/zIVDkR6B#8mrbSpKdfBmO-rPVE1NBG0DzellnWgnCOLJ9L48r58c",
        "https://mega.nz/embed/F1wQFSJZ#DDvzrGmk9KKHpItlUzK_BueWYnLbarGa5RdHQaZVu_w",
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
        "https://mega.nz/embed/PywATAyT#uiFPpPluDZ5ttigJ3guv90fLzDdEmYtzTT9mycRUAYI",
        "https://mega.nz/embed/q3x3CbRT#zE-11D1-ElS9zWRodqWacUL8MT7OMRtbY8K9VcaCvBA",
        "https://mega.nz/embed/buh0SQ6B#Fx8uXTk_CbiyRXY__OMhXzT0bwaa-WHw5Eg4fKqxWyI",
        "https://mega.nz/embed/eyBWyb7A#m_fJNzJb_UXipwiyr4jiy6v9Kr5PAfM55iqs-p9ci94",
        "https://mega.nz/embed/CjQiBAjS#i9o6IeWkIlC1OLi5hKvf2BVOaRJ8y1Ktf8CVwoaAesY",
    ],
    [
        "https://mega.nz/embed/Vz0h2DLZ#mpAS_j621Lmg1VhL5L6fAyGX1IvVSzOCJC49dxlcoRg",
        "https://mega.nz/embed/lyN0BaIa#EzFBS4qpD03cSuBz3afUidPmQStAUxxTP9q2nfCCFP0",
        "https://mega.nz/embed/EjcUFAAY#lwW4qQCsdSEG6a-nXYpJPoSUb1qBxpDfN0wBLYG1RGY",
        "https://mega.nz/embed/kqcBjbjD#oo8cQKLdu9QwoU3gxOWNifMW9MF2OXywaJveOtN54HI",
        "https://mega.nz/embed/43NkxYzY#b8wFxaDT5MfbmESg62WG3SCNkGO1c5NEhqtw9bUBw5E",
        "https://mega.nz/embed/s6F3UT4J#yyk9OYshAkR6Fq5x_LYNjtOO_dkmQ3kOlEPEGl_iqcg",
        "https://mega.nz/embed/86kRRBib#UGg30_kq3WBS_IUo0-vDN-EZBJfrwUQV0W8c09s7iQ8",
        "https://mega.nz/embed/wzEgyLzT#9g4Pp0seigt9x_qfAmWfMBcFK1Pc3qkak0SmrqLeHZ8",
        "https://mega.nz/embed/gnEyBC4Y#FxwdgKq44mnkAhHWnME5a5yB4tqRyIONyyJGry62BF0",
        "https://mega.nz/embed/1392nLYI#EyLuABBLaWY3hxcGeGAKDEaH4dcDO-cli3xj49BTE0w",
        "https://mega.nz/embed/3JFHTRqZ#eMpW7iyBG1_mqeQ4ZGDafUNI0_43rQvFg64qvy0l6Kw",
        "https://mega.nz/embed/TB0XDBrI#1lSu2qz0Vn1CAuZ-braFLedd41RYsa7yRHrBOKyH2AM",
    ],
    [
        "https://mega.nz/embed/9zl1RBib#vKgWTR74EGKTg5uCKG2TsBPslmP5s-_0KIwbgNh-0HU",
        "https://mega.nz/embed/UrF2WKAB#LTb4ikoAgm7gQOv5RxUABoHoZ0KEZTRZ4mNIS334IZs",
        "https://mega.nz/embed/pvM11C5K#perZqQJusygnxfKLmO7zB2vrq1cPRoSz99EKRnDM2vs",
        "https://mega.nz/embed/WZkyWSZI#1OXLJuiATRTqyAuwKB641-UZMo0bp2Bj3YTUq_E1Rog",
        "https://mega.nz/embed/PRtBRKTR#VMIjYjuoTfoLBsfpJ_LA5GleR7DvYijSHPBI494ZTM0",
        "https://mega.nz/embed/fJxzgS5T#X3KRx7JNowvo4sy-mMebrVaQGlyi5G9iTvyCmPJgfYI",
        "https://mega.nz/embed/6IZ2nKYD#AZCvLRAb7vdRnanmKpo1XlH0NsixC9TaTLzCBCth_RE",
        "https://mega.nz/embed/PRtBRKTR#VMIjYjuoTfoLBsfpJ_LA5GleR7DvYijSHPBI494ZTM0",
        "https://mega.nz/embed/PRtBRKTR#VMIjYjuoTfoLBsfpJ_LA5GleR7DvYijSHPBI494ZTM0",
        "https://mega.nz/embed/Sc4CiC5Y#NycrYaseXtIFa7rTgX2NgoLdncvHIlsQCGcvXGuLxJw",
        "https://mega.nz/embed/PEJyWSYC#INtHk2GslzM1J0MYU1S2R1OY6sset8ECoVVlSEvxchE",
        "https://mega.nz/embed/zcww1DqC#wavmZtLEa-qhNVVNsH6xVfT6Hnl202DIDXucc6yM8Hg",
    ],
    [
        "https://mega.nz/embed/nFkTHDKL#Q2-bf5clO69aVdwmc6GK_TBCv6A4XK1Fv1llTuGyJ4U",
        "https://mega.nz/embed/zRtDQa7T#iamehdJxErpxIClWmtHWGAyUTQ-qDzi8G6wiSqVHNG8",
        "https://mega.nz/embed/CYtWWYoI#bGTZLrVRX4DthWfaGQk1wbj6MK0LRl9jMyA_61BJ6wI",
        "https://mega.nz/embed/icNhzDJC#sK2zGnTPU1PNKgAOiJNL4ZvPRnG47Jdl8hztN4WNqM4",
        "https://mega.nz/embed/jM8EjbBT#iUFhyeYPxMDuX4wIZnoqCOCumACTjMqbqcy4L7srA8E",
        "https://mega.nz/embed/rVVCXBia#-VdERZUeaUd6Wfwv5PuTEgHD4UE0krHmpKddOKkMCJI",
        "https://mega.nz/embed/WZMgkRbD#X53JFxbAhJWFWahS9oblt870j7r6D1MLw-ArqCe916k",
        "https://mega.nz/embed/TFtWGaQY#8coZaeXBwMc3590PQ-YzsGSOcPJiCkYQKawGWrqAS0E",
        "https://mega.nz/embed/GYlDGI4S#hAbECL9kmK3X-SpMiDyBUfBf6B53x2Epmj9DPcgHoYA",
        "https://mega.nz/embed/zEEk1YzK#o3pUn1DfnqREhLW8Y3n6Qg6mF0sXmMhtcG70fPYEuo0",
        "https://mega.nz/embed/CB9FAKZL#TY1xZ5TjpbsNbWrEiaVawp4TO2XYMMEEEpf5D3YYHjg",
        "https://mega.nz/embed/XBtWBbBD#qdUyJ9PQCcsA9iy_ah_2H2DPxt99L8z_x1Q6nnxKMb8",
    ],
    [
        "https://mega.nz/embed/6Yp1gRhB#TxtL-c72yxvpiUHTh91X9cljSjx2j4pUOAWOMNrJlZs",
        "https://mega.nz/embed/6AxhmQSB#8qB9K45slZtPBfWo75rF5tfxyqnJbQQPqde-oEJRFLQ",
        "https://mega.nz/embed/7BxT2Cya#Y657uPnHP0kO1BEzCV_S7ks74JBH7yc78YDGKDTzwv8",
        "https://mega.nz/embed/nEFAHCSB#8yhAI82SeKMTObwbbQB11rNIHfmTpzRnvN-p4Pe7pPU",
        "https://mega.nz/embed/aEtgiATS#YbO1SnSQLhhLsjFIcJ_TrpsEHB0EEzyf1qDJ8AG96RQ",
        "https://mega.nz/embed/CnAVTRCA#O7Et1M6Ta25rozLZHyh9ivAtQkOtujsrAZPzvyaKBvw",
        "https://mega.nz/embed/y3AGCADR#73u9DVTDivva6p5MmtCeShuOW_KJ16HLiqEPukevXZo",
        "https://mega.nz/embed/O6YwVAzB#UTWxybKmn49Pz2SxsU2ByVnYQe7l5vn9xRQUHWuV4Lc",
        "https://mega.nz/embed/y3AGCADR#73u9DVTDivva6p5MmtCeShuOW_KJ16HLiqEPukevXZo",
        "https://mega.nz/embed/Xnp1TYwT#Tmr-1zb3ccS8le1hx4ptPt9YeqsSYg1Qf4AFTkjeZ9o",
        "https://mega.nz/embed/bMc1hKqB#wul6PBTgWz0QTgPlH0xEfCIPtK8ovjVTbYdTAHCdXC4",
        "https://mega.nz/embed/GdVASaTC#7OBBu2xtU9KMQNxwqE7wz3_WVdGwgSPsVl-jodqmrbU",
    ],
    [
        "https://mega.nz/embed/GEsGjASa#IdxS4j1cH6atmSPrMMrXe1ldwfsALLNe-aVvFFz2y-U",
        "https://mega.nz/embed/KElmhIpK#MhUe9izrT3KcxEUTPLXZIl0b7Yx6CfYN2A2PmjVfR0w",
        "https://mega.nz/embed/qFUwHASA#X74vGmXl5gTyzRoF--CBt3j7LusAjor_YlxhqRRM1vc",
        "https://mega.nz/embed/LVcFwYBS#59q9ZcBiYYXDSDfoSctuG_VhSG1f2kKqEbeL1iTh-a8",
        "https://mega.nz/embed/EhZXSY7Z#Z7igZ-nVVaSiTZxLVEgwTO0tCh2kYdr4IXekHZoWVtQ",
        "https://mega.nz/embed/xwYFiLBB#WVygkeZc8cWuQUTl8UR3LfY88XVgMQYnTlIJOHwxyOQ",
        "https://mega.nz/embed/rE8mCYzT#xzOGcHrBApqJG_UkS5D5gJh8MGTsA3zs0g2PtSoUC30",
        "https://mega.nz/embed/2d8SHTaC#yAlLloR0RaDVFLipMw-D9kj3n1kPRoOgL0W_nvPTb3A",
        "https://mega.nz/embed/CVkjUZLI#LcjLhYBeoFbm2VnnA_iM7IyC3hlA1tgUGZ4HI8bDhl4",
        "https://mega.nz/embed/1781GJrI#Ua9oQykBT89n1bN76dVT6F-KNWclHHFo20OcqYEfQww",
        "https://mega.nz/embed/Yv0UCSIa#DtuKMce9pH14WxDleIuTQ8scK6bqQzcfuQwcH3qdjJ0",
        "https://mega.nz/embed/TI5wGY7C#E_-cvuem7swup08orDtPbx85mp_ZD6H-sBVNhpK8q64",
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
function moveToPlayer(img) {
    let container = document.getElementById('selectedImageContainer');
    
    container.innerHTML = '';
    let clonedImg = img.cloneNode(true);
    clonedImg.style.width = '200px'; 
    clonedImg.style.display = 'block';
    clonedImg.style.margin = '10px auto';
    
    container.appendChild(clonedImg);

    document.getElementById('video-container').scrollIntoView({ behavior: 'smooth' });
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

document.querySelectorAll('.book').forEach((book) => {
    const images = JSON.parse(book.getAttribute('data-images'));
    let currentIndex = 0;
    
    book.addEventListener('click', function () {

      currentIndex = (currentIndex + 1) % images.length;
      
      book.style.backgroundImage = `url("${images[currentIndex]}")`;
   });
});

updateVideoCategory();
changeVideo();
