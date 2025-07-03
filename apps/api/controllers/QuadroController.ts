import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import Quadro from "../interfaces/Quadro";

const prisma = new PrismaClient();

class QuadroController {
  createQuadro = async (req: Request, res: Response) => {
    const data:Quadro = req.body;
    try {
      const quadro = await prisma.quadro.create({
        data: {
          nome: data.nome,
        },
      });
      res.status(201).json(quadro);
    } catch (error) {
      console.error("Error creating quadro:", error);
      res.status(500).json({ message: "Failed to create quadro" });
    }
  }

  getQuadros = async (req: Request, res: Response) => {
    try {
      const quadros = await prisma.quadro.findMany({
        include: {
          colunas: {
            include: {
              tarefas: true,
            },
          },
        },
      });
      res.status(201).json(quadros);

    } catch (error) {
      console.error("Error fetching quadros:", error);
      throw new Error("Failed to fetch quadros");
    }
  }

  getQuadroById = async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };
    try {
      const quadro = await prisma.quadro.findUnique({
        where: { id },
        include: {
          colunas: {
            include: {
              tarefas: true,
            },
          },
        },
      });
      if (!quadro) {
        res.status(404).json({ message: "Quadro not found" });
        return
      }

      res.status(201).json(quadro);
    } catch (error) {
      console.error("Error fetching quadro by ID:", error);
      res.status(500).json({ message: "Failed to fetch quadro by ID" });
    }
  }
}

export default QuadroController;
