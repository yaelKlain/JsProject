const dom = {
    targat: document.getElementById('targat')
}

setTimeout(function () {
    // This function will be executed after 10 seconds.
    window.location.href = "pay.html";
}, 10000);

const myId = localStorage.getItem("id");

const printFlight = () => $.ajax({
    url: "/FlightDetails.json",
    success: (result) => {
        const res = result.find(a => a.id == myId)
        console.log(res);
        const end = document.createElement('h1');
        dom.targat.appendChild(end);
        end.innerHTML = res.Endpoint;
    },

    error: (error) => {
        console.error(error);
    }
});

printFlight();
