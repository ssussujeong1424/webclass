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