const temp = document.getElementById('temp');

// שליפה מהגייסון 
const printFlight = () => $.ajax({
    url: "/FlightDetails.json",
    success: (result) => {
        perBag(result);

    },
    error: (error) => {
        console.error(error);
    }
});
printFlight();
const arrBag = [];

// יצירת מערך בעל 4 תאים העונה על דרישת הממומלצים
const perBag = (result) => {
    result.forEach(res => {
        const sum=(res.price/res.AmountOfLuggage);       
        const obj={
            sumPrice:sum,
            idArr:res.id
        }        
         arrBag.push(obj);
    });
   
    arrBag.sort((a, b) => a.sumPrice - b.sumPrice);
    const newArr = arrBag.slice(0,4)
    console.log(newArr);
    drawFlight(newArr, result);
}

// מציאת הטיסה הרצויה
const drawFlight = (newArr, result) => {
    newArr.forEach(arr => {
        const ress = result.find(a=> arr.idArr == a.id)
        temp.innerHTML += getflightHtml(ress)
    })
}

// ציור טיסה
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