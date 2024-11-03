const nav = document.getElementById("nav");

// ציור הלוגו
const li4 = document.createElement('li');
nav.appendChild(li4);
li4.classList.add("nav-item")
const logo = document.createElement('img');
li4.appendChild(logo)
logo.src = './image/בלי רקע.png';
logo.classList.add("nav-link");
logo.style.height = "50px";

// ציור- עמוד הבית

const li = document.createElement('li');
nav.appendChild(li);
li.classList.add("nav-item")
const a = document.createElement('a');
li.appendChild(a);
a.classList.add("nav-link");
a.href = './home.html';
a.innerText = "עמוד הבית";



// -ציור-חיפוש טיסה
const li1 = document.createElement('li');
nav.appendChild(li1);
li1.classList.add("nav-item")
const a1 = document.createElement('a');
li1.appendChild(a1);
a1.classList.add("nav-link");
a1.href = './flight.html';
a1.innerText = "חיפוש טיסה";

// טיסות זולות- ציור
const li2 = document.createElement('li');
nav.appendChild(li2);
li2.classList.add("nav-item")
const a2 = document.createElement('a');
li2.appendChild(a2);
a2.classList.add("nav-link");
a2.href = './cheapflight.html';
a2.innerText = "טיסות זולות";

// ציור הרגע האחרון
const li3 = document.createElement('li');
nav.appendChild(li3);
li3.classList.add("nav-item")
const a3 = document.createElement('a');
li3.appendChild(a3);
a3.classList.add("nav-link");
a3.href = './lastMoment.html';
a3.innerText = "הרגע האחרון ";


// בדיקה באיזה עמוד נמצא:
// -עמוד הבית
if (nav.classList.contains("home")) {
    a.classList.add("active");
}
// עמוד חיפוש טיסה-
if (nav.classList.contains("flight")) {
    a1.classList.add("active");
}
// עמוד טיסות זולות-
if (nav.classList.contains("cheap")) {
    a2.classList.add("active");
}
// עמוד דירוגים-
if (nav.classList.contains("ratings")) {
    a3.classList.add("active");
}







