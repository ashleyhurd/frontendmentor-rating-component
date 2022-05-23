const designPage = document.querySelector(".design");
const thankPage = document.querySelector(".thank-you-state");
const button = document.querySelector("button");

/* button functions */

button.addEventListener("click", () => {
  if (thankPage.style.display === "none") {
    thankPage.style.display = "block";
  } else {
    thankPage.style.display = "none";
  }
  if (designPage.style.display === "block") {
    designPage.style.display = "none";
  } else {
    designPage.style.display = "block";
  }
});