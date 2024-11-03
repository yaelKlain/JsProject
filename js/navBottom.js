const nuvB=document.getElementById('nuvB');
// חשובים
const DivImportant=document.createElement('div');
DivImportant.id='important';
nuvB.appendChild(DivImportant);

const Headerimportant=document.createElement('h5');
Headerimportant.innerText='חשובים';
Headerimportant.style="color:#f7bf39"
DivImportant.appendChild(Headerimportant);

const a1Imp=document.createElement('a');
a1Imp.href='./cheapflight.html';
a1Imp.classList.add("nav-link");
a1Imp.innerText="טיסות זולות";
DivImportant.appendChild(a1Imp);

const a2Imp=document.createElement('a');
a2Imp.href='#';
a2Imp.classList.add("nav-link");
a2Imp.innerText="תקנון שימוש";
DivImportant.appendChild(a2Imp);

const a3Imp=document.createElement('a');
a3Imp.href='#';
a3Imp.classList.add("nav-link");
a3Imp.innerText="מדיניות פרטיות";
DivImportant.appendChild(a3Imp);

// עבורכם
const DivFor=document.createElement('div');
DivFor.id='forYoy';
nuvB.appendChild(DivFor);

const HeaderFor=document.createElement('h5');
HeaderFor.innerText='עבורכם';
HeaderFor.style="color:#f7bf39"
DivFor.appendChild(HeaderFor);

const a1For=document.createElement('a');
a1For.href='./flight.html';
a1For.classList.add("nav-link");
a1For.innerText=" חיפוש טיסה";
DivFor.appendChild(a1For);

const a2For=document.createElement('a');
a2For.href='./lastMoment.html';
a2For.classList.add("nav-link");
a2For.innerText="הרגע האחרון";
DivFor.appendChild(a2For);

const a3For=document.createElement('a');
a3For.href='#';
a3For.classList.add("nav-link");
a3For.innerText="ביטוח נסיעות לחול";
DivFor.appendChild(a3For);

// חפשו אותנו
const DivSerch=document.createElement('div');
DivSerch.id='searchOur';
nuvB.appendChild(DivSerch);

const HeaderSerch=document.createElement('h5');
HeaderSerch.innerText='חפשו אותנו ברשת';
HeaderSerch.style="color:#f7bf39"
DivSerch.appendChild(HeaderSerch);

const icons=document.createElement('div');
icons.id='icons';
DivSerch.appendChild(icons);

const i1 =document.createElement('i');
i1.classList.add("bi");
i1.classList.add("bi-facebook");
i1.classList.add("icon");
icons.appendChild(i1)

const i2 =document.createElement('i');
i2.classList.add("bi");
i2.classList.add("bi-whatsapp");
i2.classList.add("icon");
icons.appendChild(i2)

const i3 =document.createElement('i');
i3.classList.add("bi");
i3.classList.add("bi-instagram");
i3.classList.add("icon");
icons.appendChild(i3);

const i4 =document.createElement('i');
i4.classList.add("bi");
i4.classList.add("bi-telegram");
i4.classList.add("icon");
icons.appendChild(i4);

const i5 =document.createElement('i');
i5.classList.add("bi");
i5.classList.add("bi-twitter");
i5.classList.add("icon");
icons.appendChild(i5)



