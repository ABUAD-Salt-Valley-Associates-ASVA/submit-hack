import React from "react";
import gsap from "gsap";

const Bg = () => {
  return (
    <svg width="100%" height="100%">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="65%">
          <stop offset="10%" stop-color="#004476" />
          <stop offset="90%" stop-color="#006fbe" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="85%">
          <stop offset="0%" stop-color="#f5eacc" />
          <stop offset="80%" stop-color="#e0c677" />
          <stop offset="110%" stop-color="#ebd8a0" />
        </linearGradient>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="85%">
          <stop offset="0%" stop-color="#54e2fe" />
          <stop offset="80%" stop-color="#049afd" />
          <stop offset="110%" stop-color="#2aaffc" />
        </linearGradient>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="80%" y2="70%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.75)" />
          <stop offset="90%" stop-color="rgba(255,255,255,0.3)" />
        </linearGradient>
      </defs>

      <rect fill="url(#grad1)" width="100%" height="100%" />

      <g class="main">
        <circle
          class="ball bg"
          fill={fill[random1]}
          cx="300"
          cy="130"
          r="130"
        />
        <circle
          class="ball bg"
          fill={fill[random1 + -1]}
          cx="750"
          cy="410"
          r="210"
        />
      </g>
    </svg>
  );
};

const fill = ["url(#grad4)", "url(#grad3)", "url(#grad2)", "url(#grad1)"];
const random1 = Math.floor(Math.random() * fill.length);

export default Bg;

gsap.timeline().add(centerMain(), 0.2).from(
  ".ball",
  {
    duration: 2,
    transformOrigin: "50% 50%",
    scale: 0,
    opacity: 0,
    ease: "elastic",
    stagger: 0.2,
  },
  0
);

function centerMain() {
  gsap.set(".main", { x: "50%", xPercent: -50, y: "50%", yPercent: -50 });
}
window.onresize = centerMain;

window.onmousemove = (e) => {
  let winPercent = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    },
    distFromCenter =
      1 -
      Math.abs(((e.clientX - window.innerWidth / 2) / window.innerWidth) * 2);

  gsap
    .timeline({ defaults: { duration: 0.5, overwrite: "auto" } })

    .to(".bg", { x: 100 - 200 * winPercent.x, y: 20 - 40 * winPercent.y }, 0);
};
