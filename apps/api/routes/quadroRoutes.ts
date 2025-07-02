import { Router } from "express";
import QuadroController from "../controllers/QuadroController";

const routes = Router();
const quadroController = new QuadroController();

routes.get("/", quadroController.getQuadros);
routes.get("/:id", quadroController.getQuadroById);
routes.post("/", quadroController.createQuadro);

export default routes;

