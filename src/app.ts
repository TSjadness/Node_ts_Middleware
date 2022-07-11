import express, { Express, NextFunction, Request, Response } from "express";
import connection from "./Database/sequelize";
import bodyParser from "body-parser"
import routes from "./api/routes/index";
import AppError from "./utils/AppError";

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

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(err.getHttpCode()).send(err.getError());
});

app.listen(port, () => {
  console.log("Conectado na porta " + port);
});

connection();
