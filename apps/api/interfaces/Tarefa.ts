export default interface Tarefa {
  id: string;
  nome: string;
  descricao?: string;
  tamanho?: number;
  estagio: string;
  coluna_id: string;
}
