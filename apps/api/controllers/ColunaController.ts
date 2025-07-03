import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import Coluna from "../interfaces/Coluna";

const prisma = new PrismaClient();

class ColunaController {
  createColuna = async (req: Request, res: Response) => {
    const data: Coluna = req.body;
    try {
      const coluna = await prisma.coluna.create({
        data: {
          nome: data.nome,
          posicao: data.posicao,
          quadro_id: data.quadro_id,
        },
      });
      res.status(201).json(coluna);
    } catch (error) {
      console.error("Error creating coluna:", error);
      res.status(500).json({ message: "Failed to create coluna" });
    }
  };

  getColunasByQuadro = async (req: Request, res: Response) => {
    const { quadro_id } = req.params as { quadro_id: string };
    try {
      const colunas = await prisma.coluna.findMany({
        where: { quadro_id },
        orderBy: { posicao: "asc" },
        include: {
          tarefas: true,
        },
      });
      if (!colunas) {
        res.status(404).json({ message: "Colunas not found" });
        return;
      }

      res.status(200).json(colunas);
    } catch (error) {
      console.error("Error getting colunas:", error);
      res.status(500).json({ message: "Failed to get colunas" });
    }
  };

  putColunaPosicao = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };
    const { posicao } = req.body as { posicao: number };

    try {
      const coluna = await prisma.coluna.update({
        where: { id },
        data: { posicao },
      });
      if (!coluna){
        res.status(404).json({ message: "Coluna not found" });
        return;
      }
      res.status(200).json(coluna);
    } catch (error) {
      console.error("Error updating coluna:", error);
      res.status(500).json({ message: "Failed to update coluna position" });
    }
  };

  deleteColuna = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };
    try {
      const coluna = await prisma.coluna.delete({
        where: { id },
      });
    } catch (error) {
      console.error("Error deleting coluna:", error);
      res.status(500).json({ message: "Failed to delete coluna" });
    }
  };
}

export default ColunaController;