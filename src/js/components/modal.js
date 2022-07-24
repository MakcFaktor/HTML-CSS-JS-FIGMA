const btn = document.querySelector(".main__wrapper-btn");

const close = document.querySelector(".demo__close");

const demo = document.querySelector(".demo");

close.addEventListener("click", () => {
  demo.classList.remove("close_none");
});

btn.addEventListener("click", () => {
  demo.classList.add("close_none");
});
