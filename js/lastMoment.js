const temp=document.getElementById('temp')
// שלייפה מהגייסון
const printFlight = () => $.ajax({
    url: "/FlightDetails.json",
    success: (result) => {
        findDate(result)
    },

    error: (error) => {
        console.error(error);
    }
});

printFlight();
// בדיקה האם טיסה עומדת בדרישות של טיסות ברגע האחרון
const findDate = (result) => {
    const nowDate = new Date();
    result.forEach(res => {
        const year = Number(res.date.slice(0, 4));
        const month = Number(res.date.slice(5, 7));
        const day = Number(res.date.slice(8, 10));
        if (nowDate.getFullYear() === year) {
            if (month < 12 && nowDate.getMonth() + 1 === month) {
                if (day < 29 && (nowDate.getDate() + 1 === day || nowDate.getDate() + 2 == day)) {
                    drawFlight(res);
                }
                else {
                    if (day === 29 && (nowDate.getDate() === day + 1) || (nowDate.getDate() === 01 && nowDate.getMonth() + 1 === month + 1)) {
                        drawFlight(res);
                    }
                    else {
                        if (day === 30 && (nowDate.getDate() === 01 || nowDate.getDate() === 02) && nowDate.getMonth + 1 === month + 1)
                            drawFlight(res);

                    }
                }
            }

        }


    });
}
// ציור טיסה
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


const drawFlight = (f) => {
    temp.innerHTML += getflightHtml(f);
}