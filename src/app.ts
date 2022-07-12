import express, { Express, NextFunction, Request, Response } from "express";
import { errors } from 'celebrate';
import connection from "./Database/sequelize";
import bodyParser from "body-parser"
import routes from "./api/Routes/index";
import AppError from "./Utils/AppError";
import "express-async-errors";

const app: Express = express();
const port = 1802;

app.use(bodyParser.json());

app.use('/api/v1', routes);

// app.use(function (req, res, next) {
//   res.send("Testando MiddleWare")
//   next();
// });

app.get('/', (req: Request, res: Response) => {
  res.send("hello word express + typescript !!! ")
});

// app.post(
//   "/",
//   celebrate({
//     [Segments.BODY]: Joi.object().keys({
//       username: Joi.string().required(),
//       password: Joi.number().integer(),
//     }),
//   }), (req: Request, res: Response) => {
//     res.send("A requisiçao foi enviada da forma correta! ")
//   });

app.use(errors());

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  try{
    res.status(err.getHttpCode()).send(err.getError());
  }catch(error){
    const appError = new AppError("InternalServerError ", "Erro interno do servidor!", 500);
    res.status(500).send(err.getError());
  }
});

app.listen(port, () => {
  console.log("Conectado na porta " + port);
});

connection();
