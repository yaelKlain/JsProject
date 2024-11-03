const dom = {
    search: document.getElementById('form'),
    select: document.getElementById('select'),
    date: document.getElementById('formGroupExampleInput'),
    btn_search: document.getElementById('btn_search'),
    temp: document.getElementById('temp'),
    img: document.getElementById('image'),
    btn: document.getElementById('btn')

}
// שליפה מהגייסון ויצרית אופציות לבחירת יעד
const option = () => $.ajax({
    url: "/FlightDetails.json",
    success: (result) => {
        let countries = result.map((item) => item.Endpoint);
        let distinct_countries = [... new Set(countries)];
        console.log(distinct_countries);
        distinct_countries.forEach((distinct_countries) => {
            const newOption = document.createElement("option");
            newOption.value = distinct_countries;
            newOption.text = distinct_countries;
            select.appendChild(newOption);
        });
    },
    error: (error) => {
        console.error(error);
    }
});
// הפעלת הפונקציה
option();

let date_value = dom.date.value;
let end_point_value = "Select a destination";

//  בעת לחיצה על הכפתור מופעלת פונקצית החיפוש
dom.search.onsubmit = (event) => {
    event.preventDefault();
    date_value = dom.date.value;
    end_point_value = select.value;
    console.log(date_value);
    console.log(end_point_value);
    v_search();

}

// ושליחה לציור עי שליפה מהגייסון
const v_search = () => $.ajax({
    url: "/FlightDetails.json",
    success: (result) => {
        drawFlight(result);
    },
    error: (error) => {
        console.error(error);
    }
});
// ציור טיסה בתנאי שעונה על תנאיי החיפוש
const drawFlight = (result) => {
    dom.temp.innerHTML = "";
    result.forEach(result => {
        console.log(date_value);
        if ((end_point_value === result.Endpoint || end_point_value === "Select a destination") && (date_value === result.date || date_value === "")&&( !(end_point_value === "Select a destination"&& date_value === ""))) {
            dom.temp.innerHTML += getflightHtml(result);
        };
    })
};

// ציור כרטיס טיסה
const getflightHtml = (f) => {
    return `   <div class="card" style="width: 18rem;  margin-top:9px">
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

















