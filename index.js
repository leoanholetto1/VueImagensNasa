import express from 'express';
import cors from "cors";
import proutes from "./back-end/Routes/FilmesRotas.js"
const app = express();

app.use(express.json());
app.use(cors("*"));
app.use(proutes);

app.listen(8081, () => {
    console.log("Servidor na porta 8081");   
});