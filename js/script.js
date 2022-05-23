const designPage = document.querySelector(".design");
const thankPage = document.querySelector(".thank-you-state");
const button = document.querySelector("button");
const ratingNumbers = document.getElementsByClassName("numbers");


for (let i = 0; i < ratingNumbers.length; i++) {
    ratingNumbers[i].addEventListener("click", changeButton);
  }
  
  let currentActive = "";
   
  function changeButton(e) {
    let oldActive = document.querySelector(".rating-active");
    oldActive.classList.remove("rating-active", "rating-selected");
    e.target.classList.add("rating-active", "rating-selected");
    currentActive = e.target.innerText;
  }
  


button.addEventListener("click", function () {
    if (Number(currentActive) !== 0) {
      document.querySelector(".design").classList.add("hidden");
      document.querySelector(".thank-you-state").classList.remove("hidden");
      document.querySelector(
        ".text-rating"
      ).innerText = `You selected ${currentActive} out of 5`;
    }
  });