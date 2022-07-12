import express, { Router, Request, Response, NextFunction } from "express";
import * as controller from "../Controlers/filmControlers";
import { FilmCreateValidation, FilmUpdateValidation } from "../validations/filmValidation";

const router = Router();

router.get('/', controller.getAll); //chama todos

router.get('/:id', controller.getById);//chama por id

router.post('/',FilmCreateValidation ,controller.create); //insere novo arquivo

router.put('/:id',FilmUpdateValidation ,controller.updateById);//atualizar o arquivo por id

router.delete('/:id', controller.deleteById);//deleta o arquivo por id

export default router;