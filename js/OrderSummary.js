const dom = {
    alart: document.getElementById('alart'),
    plan: document.getElementById('plan'),
    endPoint: document.getElementById('endPoint'),
    date: document.getElementById('Ddate'),
    startingPoint: document.getElementById('startingPoint'),
    startingTime: document.getElementById('startingTime'),
    airplane: document.getElementById('Airplane'),
    sumOfHours: document.getElementById('sumOfHours'),
    adult: document.getElementById('adult'),
    children: document.getElementById('children'),
    suidcese: document.getElementById('suidcese'),
    bug: document.getElementById('bug'),
    PointEnd: document.getElementById('PointEnd'),
    fininshTime: document.getElementById('fininshTime'),
    price: document.getElementById('price'),
    btn_pay: document.getElementById('btn_pay'),
    email: document.getElementById('email')
}

// שליפה של הidמ localstoge
const myId = localStorage.getItem("id");

// שליפה מהגייסון ומציאת הטיסה הנדרשת עי הid
const printFlight = () => $.ajax({
    url: "/FlightDetails.json",
    success: (result) => {
        const res = result.find(a => a.id == myId)
        drawInput(res);
    },

    error: (error) => {
        console.error(error);
    }
});

printFlight();

const myinput = JSON.parse(localStorage.getItem("myInput"));
console.log(myinput);

// ציור פרטי הטיסה
const drawInput = (res) => {
    dom.endPoint.innerText = res.Endpoint+" :היעד" ;
    dom.date.innerHTML += res.date;
    dom.startingPoint.innerHTML += res.startingPoint;
    dom.startingTime.innerHTML += res.departureTime;
    dom.airplane.innerHTML += res.airline;
    CalculationOfHours(res)
    dom.adult.innerHTML += myinput.inputAdulte;
    dom.children.innerHTML += myinput.inputChild;
    dom.suidcese.innerHTML += myinput.inputbug;
    dom.bug.innerHTML += res.QuantityOfHandbags;
    dom.PointEnd.innerHTML += res.Endpoint;
    dom.fininshTime.innerHTML += res.LandingHour;
    CalculationOfPrice(res);
}


// צריך לבדוק נכונות
// חישוב שעות טיסה
const CalculationOfHours = (res) => {
    const hourStart = res.departureTime.slice(0, 2);
    const hourFinish = res.LandingHour.slice(0, 2);
    const minuteSart = res.departureTime.slice(3, 5);
    const minuteFinish = res.LandingHour.slice(3, 5);

    let summinut = minuteFinish - minuteSart;
    if (summinut < 0) {
        summinut = summinut * -1;
    }
    console.log(summinut);
    let sumHour = hourFinish - hourStart;
    let temp = summinut;
    if (summinut > 60) {
        temp = temp / 60;
        sumHour += temp;
        summinut = summinut - (temp * 60);
    }
    if (sumHour < 0) {
        sumHour = sumHour * -1;
    }
    drawClock(sumHour, summinut)
}

// ציור משך זמן טיסה
const drawClock = (hour, minute) => {
    dom.sumOfHours.innerHTML += hour + "h" + ":";
    dom.sumOfHours.innerHTML += minute + "m";

}
// חישוב מחיר
const CalculationOfPrice = (res) => {
    const cntA = myinput.inputAdulte;
    const cntC = myinput.inputChild
    let Finalprice = res.price * cntA;
    Finalprice += res.price * cntC;
    console.log(Finalprice);
    drawPrice(Finalprice);
}
// ציור מחיר
const drawPrice = (Finalprice) => {
    dom.price.innerHTML += Finalprice + "$";
}


const myUser = JSON.parse(sessionStorage.getItem("user"));

dom.btn_pay.onclick = () => {
    email.innerHTML = myUser.emailUser;

}








