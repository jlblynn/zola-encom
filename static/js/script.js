document.addEventListener("DOMContentLoaded", function() {

  let randomNumber = Math.floor(Math.random() * 101) + 50;

  document.getElementById("randomNumber").innerHTML = randomNumber + "ms.";
  const paragraphs = document.getElementsByClassName("console__log");
  const json = document.getElementsByClassName("terminal__script");
  for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i];
    setTimeout(function() {
      paragraph.classList.add("show");
    }, i * 500);
  }
  for (let i = 0; i < json.length; i++) {
    const result = json[i];
    setTimeout(function() {
      result.classList.add("show");
    }, i * 500);
  }
});



