import { Router } from "express";
import ColunaController from "../controllers/ColunaController";

const routes = Router();
const colunaController = new ColunaController();

routes.get("/:quadro_id", colunaController.getColunasByQuadro);
routes.put("/:id/posicao/nova_posicao", colunaController.putColunaPosicao);
routes.post("/", colunaController.createColuna);
routes.delete("/:id", colunaController.deleteColuna);

export default routes;