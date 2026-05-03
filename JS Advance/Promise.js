//Learn about Promises...

//Step 1 : Open BMS.
//Step 2:  Search fro Movies..
//Step 3: Click on Book Tickets.
//Step 4: Select and Pay.

let p = new Promise((resolve, reject) => {
    app = "BMS";
    if(app === "BMS"){
        resolve("1. Open BMS.");
    }else{
        reject("Please install BMS app It's not found!!!");
    }
})
.then((step1)=>{
    console.log(step1);
    console.log("2. Search Movie...");
})
.then(()=>{
    console.log("3. Click on Book Tickets.");
})
.then(()=>{
    console.log("4. Select and Pay.");
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Close BMS app.");
});



console.log(p); 