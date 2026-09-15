/* =========================================
   HERO VIDEO CROSS FADE
========================================= */

const videoA = document.querySelector("#heroVideoA");
const videoB = document.querySelector("#heroVideoB");

if (videoA && videoB) {

    const videos = [videoA, videoB];

    // 영상 마지막 부분과 다음 영상이 겹치는 시간
    const FADE_TIME = 0.65;

    let activeIndex = 0;
    let nextIndex = 1;
    let transitioning = false;


    videos.forEach((video) => {

        video.muted = true;
        video.playsInline = true;
        video.loop = false;

    });


    function resetVideo(video) {

        try {

            video.pause();
            video.currentTime = 0;

        } catch (error) {

            console.log(error);

        }

    }



    async function startFirstVideo() {

        const firstVideo = videos[0];

        firstVideo.classList.add("is-active");


        try {

            firstVideo.currentTime = 0;

            await firstVideo.play();

        } catch (error) {

            const startVideo = async () => {

                try {

                    await firstVideo.play();

                } catch (error) {

                    console.log(error);

                }


                window.removeEventListener(
                    "click",
                    startVideo
                );

                window.removeEventListener(
                    "touchstart",
                    startVideo
                );

            };


            window.addEventListener(
                "click",
                startVideo
            );

            window.addEventListener(
                "touchstart",
                startVideo
            );

        }

    }



    function crossFade() {

        if (transitioning) return;


        transitioning = true;


        const currentVideo =
            videos[activeIndex];

        const nextVideo =
            videos[nextIndex];


        nextVideo.currentTime = 0;


        nextVideo.play()
            .then(() => {


                // 다음 영상 보이기
                nextVideo.classList.add(
                    "is-active"
                );


                // 현재 영상 서서히 사라지기
                currentVideo.classList.add(
                    "is-fading-out"
                );


                setTimeout(() => {


                    currentVideo.pause();

                    currentVideo.currentTime = 0;


                    currentVideo.classList.remove(
                        "is-active",
                        "is-fading-out"
                    );


                    activeIndex =
                        nextIndex;


                    nextIndex =
                        activeIndex === 0
                            ? 1
                            : 0;


                    transitioning = false;


                }, FADE_TIME * 1000);


            })
            .catch((error) => {

                console.log(error);

                transitioning = false;

            });

    }



    function checkVideoTime() {

        const currentVideo =
            videos[activeIndex];


        if (

            !transitioning &&

            currentVideo.duration &&

            currentVideo.currentTime >=
            currentVideo.duration - FADE_TIME

        ) {

            crossFade();

        }


        requestAnimationFrame(
            checkVideoTime
        );

    }



    startFirstVideo();

    checkVideoTime();



    // 다른 탭 갔다가 돌아왔을 때 재생 복구
    document.addEventListener(
        "visibilitychange",
        () => {

            if (!document.hidden) {

                const currentVideo =
                    videos[activeIndex];


                if (currentVideo.paused) {

                    currentVideo
                        .play()
                        .catch(() => {});

                }

            }

        }
    );

}



/* =========================================
   ABOUT SCROLL ANIMATION
   큰 글자 : 위 → 아래
   작은 글자 : 왼쪽 → 오른쪽
========================================= */

const revealItems = document.querySelectorAll(
    ".reveal-down, .reveal-right"
);

if (revealItems.length > 0) {

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "is-visible"
                    );

                }

            });

        },

        {
            threshold: 0.15,
            rootMargin: "0px 0px -8% 0px"
        }

    );


    revealItems.forEach((item) => {

        observer.observe(item);

    });

}



/* =========================================
   RESUME POPUP
========================================= */

const resumeModal =
    document.querySelector("#resumeModal");

const resumeOpen =
    document.querySelector("#resumeOpen");

const resumeCloseButtons =
    document.querySelectorAll(
        "[data-resume-close]"
    );


/* 팝업 열기 */

function openResume() {

    if (!resumeModal) return;


    resumeModal.classList.add(
        "is-open"
    );


    resumeModal.setAttribute(
        "aria-hidden",
        "false"
    );


    // 팝업 열렸을 때
    // 뒤쪽 페이지 스크롤 방지
    document.body.style.overflow =
        "hidden";

}


/* 팝업 닫기 */

function closeResume() {

    if (!resumeModal) return;


    resumeModal.classList.remove(
        "is-open"
    );


    resumeModal.setAttribute(
        "aria-hidden",
        "true"
    );


    // 페이지 스크롤 다시 허용
    document.body.style.overflow =
        "";

}



/* VIEW RESUME 버튼 클릭 */

if (resumeOpen) {

    resumeOpen.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            openResume();

        }
    );

}



/* X 버튼 또는 배경 클릭 */

resumeCloseButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                closeResume();

            }
        );

    }
);



/* ESC 키로 팝업 닫기 */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            resumeModal &&
            resumeModal.classList.contains(
                "is-open"
            )
        ) {

            closeResume();

        }

    }
);

/* =========================================
   ABOUT DETAIL SCROLL MOTION
========================================= */

(() => {

    // 모션 최소화 설정 사용자는 애니메이션 없이 바로 표시
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    /* -----------------------------------------
       1. MY DESIGN PRINCIPLE
          CLARITY IN BEAUTY

          위 → 아래
    ----------------------------------------- */

    const principleHeading =
        document.querySelector(".principle-block .section-heading");


    if (principleHeading && !reduceMotion) {

        principleHeading.style.opacity = "0";

        principleHeading.style.transform =
            "translateY(-45px)";

        principleHeading.style.transition =
            "opacity 0.9s ease, transform 1s cubic-bezier(.2,.7,.2,1)";


        const principleHeadingObserver =
            new IntersectionObserver(

                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) return;


                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";


                        observer.unobserve(
                            entry.target
                        );

                    });

                },

                {
                    threshold: 0.3,
                    rootMargin: "0px 0px -10% 0px"
                }

            );


        principleHeadingObserver.observe(
            principleHeading
        );

    }



    /* -----------------------------------------
       2. DESIGN PRINCIPLE 01 ~ 05

          왼쪽 → 오른쪽
          하나씩 순차 등장
    ----------------------------------------- */

    const principleCards =
        document.querySelectorAll(
            ".principle-card"
        );


    if (
        principleCards.length > 0 &&
        !reduceMotion
    ) {

        principleCards.forEach(
            (card, index) => {

                card.style.opacity = "0";

                card.style.transform =
                    "translateX(-45px)";

                card.style.transition =
                    `
                    opacity 0.75s ease ${index * 0.12}s,
                    transform 0.9s cubic-bezier(.2,.7,.2,1) ${index * 0.12}s
                    `;

            }
        );


        const principleGrid =
            document.querySelector(
                ".principle-grid"
            );


        if (principleGrid) {

            const principleCardObserver =
                new IntersectionObserver(

                    (entries, observer) => {

                        entries.forEach((entry) => {

                            if (
                                !entry.isIntersecting
                            ) return;


                            principleCards.forEach(
                                (card) => {

                                    card.style.opacity =
                                        "1";

                                    card.style.transform =
                                        "translateX(0)";

                                }
                            );


                            observer.unobserve(
                                entry.target
                            );

                        });

                    },

                    {
                        threshold: 0.2,
                        rootMargin:
                            "0px 0px -10% 0px"
                    }

                );


            principleCardObserver.observe(
                principleGrid
            );

        }

    }


/* -----------------------------------------
   3. 띠배너 사진
   가운데 → 양옆으로 펼쳐짐
----------------------------------------- */

const aboutBanner =
    document.querySelector(".about-banner");

const aboutBannerImage =
    document.querySelector(".about-banner img");


if (aboutBanner && aboutBannerImage) {

    let bannerAnimated = false;


    // 처음에는 가운데 부분만 보이게
    aboutBanner.style.clipPath =
        "inset(0 49.5% 0 49.5%)";

    aboutBanner.style.webkitClipPath =
        "inset(0 49.5% 0 49.5%)";


    aboutBanner.style.transition =
        "clip-path 1.3s cubic-bezier(.22,.75,.18,1)";

    aboutBanner.style.webkitTransition =
        "-webkit-clip-path 1.3s cubic-bezier(.22,.75,.18,1)";


    // 사진 자체는 살짝 확대
    aboutBannerImage.style.transform =
        "scale(1.04)";

    aboutBannerImage.style.transition =
        "transform 1.6s cubic-bezier(.22,.75,.18,1)";


    function showBanner() {

        if (bannerAnimated) return;


        const rect =
            aboutBanner.getBoundingClientRect();


        // 배너가 화면 아래쪽 85% 지점에 들어오면 실행
        if (
            rect.top <
            window.innerHeight * 0.85
        ) {

            bannerAnimated = true;


            aboutBanner.style.clipPath =
                "inset(0 0 0 0)";

            aboutBanner.style.webkitClipPath =
                "inset(0 0 0 0)";


            aboutBannerImage.style.transform =
                "scale(1)";


            window.removeEventListener(
                "scroll",
                showBanner
            );

        }

    }


    window.addEventListener(
        "scroll",
        showBanner,
        {
            passive:true
        }
    );


    // 새로고침했을 때 이미 배너 위치에 있을 경우
    showBanner();

}

    /* -----------------------------------------
       4. DESIGN CAPABILITIES

          위쪽 → 아래쪽으로 펼쳐짐
    ----------------------------------------- */

    const expertiseHeading =
        document.querySelector(
            ".expertise-heading"
        );


    const skillRows =
        document.querySelectorAll(
            ".skill-row"
        );


    if (
        expertiseHeading &&
        !reduceMotion
    ) {

        expertiseHeading.style.opacity =
            "0";

        expertiseHeading.style.transform =
            "translateY(-35px)";

        expertiseHeading.style.transition =
            "opacity .8s ease, transform .9s cubic-bezier(.2,.7,.2,1)";


        const expertiseHeadingObserver =
            new IntersectionObserver(

                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) return;


                        expertiseHeading.style.opacity =
                            "1";

                        expertiseHeading.style.transform =
                            "translateY(0)";


                        observer.unobserve(
                            entry.target
                        );

                    });

                },

                {
                    threshold: 0.3,
                    rootMargin:
                        "0px 0px -10% 0px"
                }

            );


        expertiseHeadingObserver.observe(
            expertiseHeading
        );

    }



    /* -----------------------------------------
       5. SKILL ROW

          위 → 아래로 펼쳐짐
          Photoshop → Illustrator → Figma...
    ----------------------------------------- */

    if (
        skillRows.length > 0 &&
        !reduceMotion
    ) {

        skillRows.forEach(
            (row, index) => {

                row.style.opacity = "0";


                // 위에서 아래로 열리는 느낌
                row.style.clipPath =
                    "inset(0 0 100% 0)";


                row.style.transform =
                    "translateY(-22px)";


                row.style.transition =
                    `
                    opacity .65s ease ${index * 0.1}s,
                    clip-path .9s cubic-bezier(.2,.7,.2,1) ${index * 0.1}s,
                    transform .9s cubic-bezier(.2,.7,.2,1) ${index * 0.1}s
                    `;

            }
        );


        const skillsTable =
            document.querySelector(
                ".skills-table"
            );


        if (skillsTable) {

            const skillObserver =
                new IntersectionObserver(

                    (entries, observer) => {

                        entries.forEach((entry) => {

                            if (
                                !entry.isIntersecting
                            ) return;


                            skillRows.forEach(
                                (row) => {

                                    row.style.opacity =
                                        "1";

                                    row.style.clipPath =
                                        "inset(0 0 0% 0)";

                                    row.style.transform =
                                        "translateY(0)";

                                }
                            );


                            observer.unobserve(
                                entry.target
                            );

                        });

                    },

                    {
                        threshold: 0.12,
                        rootMargin:
                            "0px 0px -5% 0px"
                    }

                );


            skillObserver.observe(
                skillsTable
            );

        }

    }



    /* -----------------------------------------
       REDUCED MOTION
    ----------------------------------------- */

    if (reduceMotion) {

        [
            principleHeading,
            ...principleCards,
            expertiseHeading,
            ...skillRows
        ].forEach((element) => {

            if (!element) return;

            element.style.opacity = "1";
            element.style.transform = "none";
            element.style.clipPath = "none";

        });


        if (aboutBanner) {

            aboutBanner.style.clipPath =
                "none";

        }


        if (aboutBannerImage) {

            aboutBannerImage.style.transform =
                "none";

        }

    }

})();