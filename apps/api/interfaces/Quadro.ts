import Coluna from "./Coluna";

export default interface Quadro {
  id: string;
  nome: string;
  data_criacao: Date;
  colunas?: Coluna[];
}
