/** splash */
TweenMax.to("#splash", 1.2, {
  y: "-100%",
  delay: 0.3,
  ease: Expo.easeInOut,
});

/** header */
TweenMax.fromTo(
  "header",
  1.3,
  {
    y: "-100%",
  },
  {
    y: "0%",
    delay: 1,
    ease: Expo.easeInOut,
  }
);
TweenMax.fromTo(
  "#youtubeLink",
  1,
  {
    y: "-100%",
    opacity: 0,
  },
  {
    y: "0%",
    opacity: 1,
    delay: 1.4,
    ease: Expo.easeInOut,
  }
);
TweenMax.staggerFromTo(
  "header .group",
  1,
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    delay: 2,
    stagger: 0.2,
    ease: Circ.easeOut,
  }
);

/** section */
TweenMax.fromTo(
  "#grabber",
  1,
  {
    y: 30,
    opacity: 0,
  },
  {
    y: 1,
    opacity: 1,
    delay: 2,
    ease: Bounce.easeInOut,
  }
);
const outputBoxAnim = () => {
  TweenMax.fromTo(
    ".output",
    1.2,
    {
      y: 60,
      opacity: 0,
      pointerEvents: "none",
    },
    {
      y: 1,
      opacity: 1,
      pointerEvents: "all",
      ease: Expo.easeInOut,
    }
  );
};
