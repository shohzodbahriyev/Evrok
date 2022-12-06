idx = 0;
function product__thubs() {
  var thubs = "technique__image/product__image" + `${idx}` + ".png";
  document.getElementById("poruduct__main__image").src = thubs;
}
document.getElementById("img0").addEventListener("click", () => {
  idx = 0;
  product__thubs();
});
document.getElementById("img1").addEventListener("click", () => {
  idx = 1;
  product__thubs();
});
document.getElementById("img2").addEventListener("click", () => {
  idx = 2;
  product__thubs();
});

let abs = document.getElementById("tab");
let abss = document.getElementById("tab1");
let absss = document.getElementById("tab2");
let characteristics = (document.getElementById(
  "characteristics"
).style.display = "none");
let prDocument = (document.getElementById("document").style.display = "none");
function act() {
  abs.className = "active";
  abss.classList.remove("active");
  absss.classList.remove("active");
  document.getElementById("info").style.display = "block";
  document.getElementById("characteristics").style.display = "none";
  document.getElementById("document").style.display = "none";
}
function actt() {
  abss.className = "active";
  abs.classList.remove("active");
  absss.classList.remove("active");
  document.getElementById("info").style.display = "none";
  document.getElementById("characteristics").style.display = "block";
  document.getElementById("document").style.display = "none";
}
function acttt() {
  absss.className = "active";
  abs.classList.remove("active");
  abss.classList.remove("active");
  document.getElementById("info").style.display = "none";
  document.getElementById("document").style.display = "block";
  document.getElementById("characteristics").style.display = "none";
}
abs.addEventListener("click", act);
abss.addEventListener("click", actt);
absss.addEventListener("click", acttt);
let card = document.getElementById("card");
let cardLengt = document.querySelectorAll(
  ".similar__cranes .similar__cranes__box"
).length;
idx = 0;
function cardNext() {
  if (idx > cardLengt - 1) {
    idx = cardLengt - 1;
  } else if (idx < 0) {
    idx = 0;
  }
  card.style.transform = ` translateX(${idx * -345}px)`;
}
document.getElementById("btnright").addEventListener("click", () => {
  idx++;
  cardNext();
});
document.getElementById("btnleft").addEventListener("click", () => {
  idx--;
  cardNext();
});
let consent__all = document.getElementById("consent__all");
let = imgRotate = document.getElementById("imgRotate");
consent__all.style.display = "none";
document.getElementById("consent__img").addEventListener("click", () => {
  if (
    consent__all.style.display == "none" ||
    imgRotate.style.transform == "rotate(0deg)"
  ) {
    consent__all.style.display = "block";
    imgRotate.style.transform = "rotate(180deg)";
  } else if (consent__all.style.display == "block"|| imgRotate.style.transform == "rotate(180deg)") {
    consent__all.style.display = "none";
    imgRotate.style.transform = "rotate(0deg)"
  }
});
