const express = require('express');
const app = express();


app.get("/", (req, res) => {
        res.render("index.html");
});

app.listen(8080, () => {
    console.log("server start from localhost 8080");
});
