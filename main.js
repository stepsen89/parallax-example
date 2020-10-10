console.log("loaded")

document.addEventListener("mousemove", (e) => {
  console.log(e);
  const laptop = document.querySelector(".laptop");
  const content = document.querySelector(".content");

  laptop.style.right = 100 + e.pageX/2 + 'px';
  content.style.left = 100 + e.pageX/2.5 + 'px';
})