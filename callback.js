function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!");
        callback();
    },3000)
}


function processData() {
    console.log("Processing data...");
}

fetchData(processData);
