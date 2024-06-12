import http from "http";
import express from "express";
import carsRouter from "./routes/cars.routes";
import bodyParser from "body-parser"; //sebagai middleware 

const port = 3030;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/cars", carsRouter) //buat API cars yang ngambil dari file carsRouter 

//route testing
app.get("/hello-world", (req, res) => { //method GET untuk melihat data yang tersedia ( read )
    res.status(200).json ({
        message: "Hello World"
    })
});

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`API is started at port ${port}`)
});