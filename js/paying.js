const dom = {
    for: document.getElementById('for'),
    to: document.getElementById('to'),
    date: document.getElementById('date'),
    inpAdult: document.getElementById('num1'),
    inpChild: document.getElementById('num2'),
    inpBag: document.getElementById('num3'),
    divBug: document.getElementById('bug'),
    btnPay: document.getElementById('btn_pay'),
    form: document.getElementById("login-form"),
    emailUser: document.getElementById("floatingInput"),
    passwordUser: document.getElementById("floatingPassword"),

}

// שליפה id מה-url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');


// שליפה מהגייסון ומציאת ה-id המתאים
const printFlight = () => $.ajax({
    url: "/FlightDetails.json",
    success: (result) => {
        const res = result.find(a => a.id == id)
        console.log(res);
        dom.for.innerText += res.startingPoint;
        dom.to.innerText += res.Endpoint;
        dom.date.innerText += res.date;
        const worng = document.createElement('div');
        dom.divBug.appendChild(worng)
        dom.btnPay.disabled = false;
        dom.inpBag.addEventListener('input', function () {
            if (this.value > res.AmountOfLuggage) {
                worng.innerText = "כמות מזוודות גדולה :(";
                worng.classList.add("wWorng")
                dom.inpBag.value = res.AmountOfLuggage;
                worng.style = "display:block;";
                dom.btnPay.disabled = true;
            }
            if (this.value < res.AmountOfLuggage) {
                dom.btnPay.disabled = false;
                worng.style = "display:none;";

            }
            
        });


    },
    error: (error) => {
        console.error(error);
    }
});
printFlight();

// הכנסה ללוקל את נתוני האינפוטים
dom.btnPay.onclick = () => {
    const inputAdulte = dom.inpAdult.value;
    const inputChild = dom.inpChild.value;
    const inputbug = dom.inpBag.value;
    const nowinput = input(inputAdulte, inputChild, inputbug);
    localStorage.setItem("myInput", JSON.stringify(nowinput));
    localStorage.setItem("id", id);
}


const input = (inputAdulte, inputChild, inputbug) => {
    return {
        inputAdulte: inputAdulte,
        inputChild: inputChild,
        inputbug: inputbug

    }

}


// login

const User = (emailUser, passwordUser) => {
    return {
        emailUser: emailUser,
        passwordUser: passwordUser,
    }
}

dom.form.onsubmit = (event) => {
    event.preventDefault();
    const email = dom.emailUser.value;
    const password = dom.passwordUser.value;
    const currentUser = User(email, password);
    sessionStorage.setItem('user',JSON.stringify(currentUser));
    location.href = "./transitin.html";
}


