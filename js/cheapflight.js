const temp = document.getElementById('temp');
// שליפה מה- json ומיון המערך שהתקבל ע"פ המחיר
const printFlight = () => $.ajax({
    url: "/FlightDetails.json",
    success: (result) => {
        console.log(result);
        result.sort((a, b) => a.price - b.price);
        console.log(result);
        drawFlight(result);
    },
    error: (error) => {
        console.error(error);
    }
});

// הפעלת הפונקציה
printFlight();

// ציור כרטיס הטיסה
const getflightHtml = (f) => {
    return `   <div class="card" style="width: 18rem; margin-top:9px">
                  <img src="${f.url}" class="card-img-top" style="height: 150px;" alt="...">
                     <div class="card-body">
                         <div style="display: flex;" class="justify-content-between">
                             <h5 class="card-title" style="display: inline-block;">${f.startingPoint}-${f.Endpoint}</h5>
                             <h5 class="card-title" style="display: inline-block; ">${f.price}$</h5>
                         </div>
                        <h6 style="display: inline-block;"><i class="bi bi-calendar-heart"></i></h6>
                        <h6 class="card-subtitle mb-2 text-body-secondary mx-2" style="display: inline-block;">${f.date}</h6>
                        <p class="card-text">  
                           <i class="bi bi-airplane "></i> 
                           <span style="margin-left: 8px;">חברת תעופה: ${f.airline}</span>
                         </p>
                          <a href="./order.html?id=${f.id}" class="btn btn-primary" id=${f.id} >להזמנה ב-${f.price}$ </a>
                    </div>
             </div>`
};

// ציור כל הכרטיסם הרצויים
const drawFlight = (f) => {
    f.forEach(f => temp.innerHTML += getflightHtml(f))
}
