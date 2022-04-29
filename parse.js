var fs = require('fs'); 
const csvParser = require("csv-parser");

// fs.createReadStream("csv/top_20_evidences.csv", { encoding: "utf-8" })
//   .on("data", (chunk) => {
//     console.log(chunk);
//   })
//   .on("error", (error) => {
//     console.log(error);
//   });

const options =[];

const result = [];

const search = async (marker)=> {

	const reader = fs.createReadStream(`csv/${marker}.csv`, { encoding: "utf-8" })
		.pipe(csvParser())
  		.on("data", (data) => {
    		result.push(data);
  		})
		.on("end", () => {
			console.log(result[0].sentence + 'is the target');
			console.log(result[1].sentence + 'is the evidence')
			// resolve({
			// 	target: result[0].sentence.split(",")[1],
			// 	evidence: result[1].sentence
			// })
		})		
		// .on("close", ()=>{
		// 	console.log("closed")
		// })

		.unpipe(csvParser());

		
	// return new Promise(function(resolve,reject){
	// 	console.log(marker);
	// 	// reader.on('unpipe', function() { console.log('unpipe emitted from readStream') })
	// 	// reader.on('end', function() { console.log('end emitted from readStream') })
	// 	// reader.on('close', function() { console.log('close emitted from readStream') })

    //     reader.on('end', () => resolve({
	// 		target: result[0].sentence.split(",")[1],
	// 		evidence: result[1].sentence
	// 	}))


    //     reader.on('error', reject); 
    // });

}



module.exports = { search };
