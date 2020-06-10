let scroll_pos = document.createElement("div");
scroll_pos.classList.add("scroll_pos");
let scroll_wrap = document.createElement("div");
scroll_wrap.classList.add("scroll_wrap");
let scroll1 = document.createElement("div");
scroll1.classList.add("scroll1", "scroll1_ani");
let scroll2 = document.createElement("div");
scroll2.classList.add("scroll2", "scroll2_ani");
let scroll3 = document.createElement("div");
scroll3.classList.add("scroll3", "scroll3_ani");
scroll_wrap.appendChild(scroll1);
scroll_wrap.appendChild(scroll2);
scroll_wrap.appendChild(scroll3);
scroll_pos.appendChild(scroll_wrap);
document.querySelector("#main").appendChild(scroll_pos);

scroll_wrap.addEventListener("click", () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: window.innerHeight,
    ease: "power3.inOut"
  })
})

var scrollArrowScene = new ScrollMagic.Scene({
    triggerElement: "#main",
    duration: "10%",
    triggerHook: 0
  })
  .setTween(gsap.to(scroll_pos, {
    opacity: "0",
    ease: "none"
  }))
  .addTo(controller)
