let toTop = document.createElement("button");
toTop.id = "toTop";
toTop.textContent = "TOP";
document.querySelector("body").appendChild(toTop);
toTop.addEventListener("click", () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: 0,
    ease: "power3.inOut"
  })
})

//ved hjælp af scroolmagic, kommer knappen frem når brugeren har scrollet lidt ned på siden

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
