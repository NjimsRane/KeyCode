const keyCode = document.querySelector(".keyCode");
const letter = document.querySelector(".letter");

document.addEventListener("keypress", (e) => {
  const letterPress = e.key.toUpperCase();
  const keyCodePress = e.keyCode;

  keyCode.textContent = keyCodePress;
  letter.textContent = letterPress;

  if (keyCodePress === 32) {
    letter.textContent = "SPACE";
  }
});
