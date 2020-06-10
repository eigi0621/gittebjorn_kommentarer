let toTop = document.createElement("button");
toTop.id = "toTop";
toTop.textContent = "TILBAGE";
document.querySelector("body").appendChild(toTop);
toTop.addEventListener("click", () => {
  window.history.back();
})


var controller = new ScrollMagic.Controller();


var toTopScene = new ScrollMagic.Scene({
    triggerElement: "#main",
    duration: "100%",
    triggerHook: 0
  })
  .setTween(
    gsap.from(toTop, {
      y: "200%",
      ease: "none"
    })
  )
  .addTo(controller)
