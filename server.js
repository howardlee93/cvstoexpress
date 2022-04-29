
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
var fs = require('fs'); 
const Papa = require("papaparse");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.get("/", (req,res) => res.send("Hello, this is the home page"))

app.get("/:term" , (req, res) => {
    console.log(req.params.term)
    let marker = req.params.term;
    // parse2.search(req.params.term)
    // const data = [];

    let reader = fs.createReadStream(`csv/${marker}.csv`, { encoding: "utf-8" });

    if (reader){
        Papa.parse(reader,{
            header: true,
            skipEmptyLines: "greedy",
            dynamicTyping: false,
            error: function(err, file, inputElem, reason) {
                console.log(err);
                },
            complete: result => {
                const data = [];
                data.push(result)
                res.send(data);
            }
        })
    };

    // .then(() =>  res.sendFile(__dirname + `/res/${req.params.term}.pdf`)
})