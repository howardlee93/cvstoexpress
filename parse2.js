// parse2.js

var fs = require('fs'); 
const Papa = require("papaparse");

const results = [];

const options = { header: true };

const search = async (marker)=> {

    let reader = fs.createReadStream(`csv/${marker}.csv`, { encoding: "utf-8" });
    let csv = Papa.parse(Papa.NODE_STREAM_INPUT, options);

    reader.pipe(csv)
    .on("data", (data) => {
        results.push(data);
    })
    .on("end", () => {
        console.log(results[0]);
        reader.unpipe(csv);
        csv.end();
        reader.destroy();      
    })
            

    
}

module.exports = { search };
