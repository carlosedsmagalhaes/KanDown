import Tarefa from "./Tarefa";

export default interface Coluna {
  id: string;
  nome: string;
  posicao: number;
  quadro_id: string;
  tarefas?: Tarefa[];
}
