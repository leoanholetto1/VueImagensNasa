import express from 'express';
import FilmesController from '../Controllers/FilmesController.js';

const ctrl = new FilmesController();
const proutes = express.Router();

proutes.post("/insere-filme", ctrl.insereFilmes);

proutes.post("/buscaGeneros", ctrl.buscaGeneros);

proutes.get("/retornaGeneros", ctrl.retornaGenero);

proutes.get("/buscaFlexivel", ctrl.buscaFlexivel);

export default proutes;