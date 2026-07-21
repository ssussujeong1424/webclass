const shootingStarCount = 130;

for (let index = 0; index < shootingStarCount; index += 1) {
    const star = document.createElement("span");
    const duration = 16 + Math.random() * 14;

    star.className = "shooting-star";
    star.style.setProperty("--left", `${-35 + Math.random() * 130}vw`);
    star.style.setProperty("--top", `${-45 + Math.random() * 125}vh`);
    star.style.setProperty("--length", `${100 + Math.random() * 180}px`);
    star.style.setProperty("--duration", `${duration}s`);
    star.style.setProperty("--delay", `${-Math.random() * duration}s`);

    document.body.append(star);
}
