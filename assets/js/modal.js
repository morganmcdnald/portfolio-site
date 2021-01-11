// Get modal element
var modal = document.getElementById("simpleModal");
var dickinsonModal = document.getElementById("dickinsonModal");
var bkbModal = document.getElementById("bkbModal");
var appModal = document.getElementById("appModal");
var carthaModal = document.getElementById("carthaModal");
var ssModal = document.getElementById("ssModal");

// Get open modal button
var modalBtn = document.getElementById("modalBtn");
var dickinsonBtn = document.getElementById("dickinsonBtn");
var bkbBtn = document.getElementById("bkbBtn");
var appBtn = document.getElementById("appBtn");
var carthaBtn = document.getElementById("carthaBtn");
var ssBtn = document.getElementById("ssBtn");

// Get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];
var closeDickBtn = document.getElementsByClassName("closeDickBtn")[0];
var closeBkbBtn = document.getElementsByClassName("closeBkbBtn")[0];
var closeAppBtn = document.getElementsByClassName("closeAppBtn")[0];
var closeCarthaBtn = document.getElementsByClassName("closeCarthaBtn")[0];
var closeSsBtn = document.getElementsByClassName("closeSsBtn")[0];

const loaderContainer = document.querySelector(".loader-container");

// Listen for open click
modalBtn.addEventListener("click", openModal);
dickinsonBtn.addEventListener("click", openDickinsonModal);
bkbBtn.addEventListener('click', openBkbModal);
appBtn.addEventListener('click', openAppModal);
carthaBtn.addEventListener('click', openCarthaModal);
ssBtn.addEventListener('click', openSsModal);

// Listen for close click
closeBtn.addEventListener("click", closeModal);
closeDickBtn.addEventListener("click", closeDickModal);
closeBkbBtn.addEventListener("click", closeBkbModal);
closeAppBtn.addEventListener("click", closeAppModal);
closeCarthaBtn.addEventListener("click", closeCarthaModal);
closeSsBtn.addEventListener("click", closeSsModal);

// Listen for outside click
window.addEventListener("click", outsideClick);
window.addEventListener("click", outsideClickDick);
window.addEventListener("click", outsideClickBkb);
window.addEventListener("click", outsideClickApp);
window.addEventListener("click", outsideClickCartha);
window.addEventListener("click", outsideClickSs);

window.addEventListener("load", () => {
  loaderContainer.classList.add("hide");
});

// Function to open modal
function openModal() {
  modal.style.display = "block";
}

function openDickinsonModal() {
  dickinsonModal.style.display = "block";
}

function openBkbModal() {
    bkbModal.style.display = "block";
}

function openAppModal() {
    appModal.style.display = "block";
}

function openCarthaModal() {
    carthaModal.style.display = "block";
}

function openSsModal() {
    ssModal.style.display = "block";
}

// Function to close modal
function closeModal() {
  modal.style.display = "none";
}

function closeDickModal() {
  dickinsonModal.style.display = "none";
}

function closeBkbModal() {
    bkbModal.style.display = "none";
}

function closeAppModal() {
    appModal.style.display = "none";
}

function closeCarthaModal() {
    carthaModal.style.display = "none";
}

function closeSsModal() {
    ssModal.style.display = "none";
}

// Function to close modal if outside click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

function outsideClickDick(e) {
  if (e.target == dickinsonModal) {
    dickinsonModal.style.display = "none";
  }
}

function outsideClickBkb(e) {
    if (e.target == bkbModal) {
      bkbModal.style.display = "none";
    }
}

function outsideClickApp(e) {
    if (e.target == appModal) {
      appModal.style.display = "none";
    }
}

function outsideClickCartha(e) {
    if (e.target == carthaModal) {
      carthaModal.style.display = "none";
    }
}

function outsideClickSs(e) {
    if (e.target == ssModal) {
      ssModal.style.display = "none";
    }
}