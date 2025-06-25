// ---------- Modal Logic ----------
const tryNow = document.getElementById("try-btn");
const goBack = document.getElementById("goBack-btn");
const modal = document.getElementById("modal");

tryNow.addEventListener("click", () => {
  modal.style.display = "flex";
  modal.style.opacity = 0;

  setTimeout(() => {
    modal.classList.add("slidUpAnimation");
  }, 100);

  setTimeout(() => {
    modal.style.opacity = 1;
  }, 200);
});

goBack.addEventListener("click", () => {
  modal.style.opacity = 1;

  setTimeout(() => {
    modal.style.opacity = 0;

    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }, 0);
});
