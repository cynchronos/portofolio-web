import gsap from "gsap";

let titleTl, subtitleTl;

export const typeWriterLoadingTitle = (chars, speed) => {
  titleTl = gsap.timeline();

  chars.forEach((char, index) => {
    titleTl.fromTo(char, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: speed,
      ease: "power3.in",
    }, index * 0.2)
      .to(char, {
        color: "white",
        stagger: 0.5,
        duration: speed - 0.1,
        ease: "power1.in",
      })
  });
};

export const typeWriterLoadingSubtitle = (chars, speed) => {
  subtitleTl = gsap.timeline();

  chars.forEach((char, index) => {
    subtitleTl.fromTo(char, {
      opacity: 0,
      color: "white",
    }, {
      opacity: 1,
      stagger: 0.1,
      duration: speed,
      ease: "power3.in",
    })
  })

  subtitleTl.eventCallback("onComplete", () => {
    const repeatTimeline = gsap.timeline({
      repeat: 1, // repeat the timeline 1 time
    });
  
    repeatTimeline.to(chars, {
      opacity: 0,
      duration: 1,
      ease: "power2.in",
    });
  
    repeatTimeline.to(chars, {
      opacity: 1,
      duration: 1,
      ease: "power2.in",
    });
  
    gsap.delayedCall(5, () => {
      titleTl.restart();
      subtitleTl.restart();
    });
  });
}
