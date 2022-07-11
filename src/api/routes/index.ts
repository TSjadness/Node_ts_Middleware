import { Router } from "express";
import Film from "./filmRoute";

const routes = Router();

routes.use('/films', Film);

export default routes;