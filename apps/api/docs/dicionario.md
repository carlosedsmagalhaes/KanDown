## Tabela: Quadro

| Campo         | Tipo     | Obrigatório | Descrição                        |
|---------------|----------|-------------|----------------------------------|
| id            | String   | Sim         | Identificador único (UUID)       |
| nome          | String   | Sim         | Nome do quadro                   |
| data_criacao  | DateTime | Sim         | Data de criação                  |

## Tabela: Coluna

| Campo       | Tipo     | Obrigatório | Descrição                       |
|-------------|----------|-------------|---------------------------------|
| id          | String   | Sim         | Identificador único             |
| nome        | String   | Sim         | Nome da coluna                  |
| posicao     | Int      | Sim         | Ordem da coluna no quadro       |
| quadro_id   | String   | Sim         | FK para Quadro                  |

## Tabela: Tarefa

| Campo       | Tipo     | Obrigatório | Descrição                          |
|-------------|----------|-------------|------------------------------------|
| id          | String   | Sim         | Identificador único                |
| nome        | String   | Sim         | Nome da coluna                     |
| descricao   | String   | Não         | Descrição da tarefa                |
| posicao     | Int      | Sim         | Posição da tarefa dentro da Coluna |
| tamanho     | Int      | Não         | Tamanho estimado da tarefa         |
| estagio     | String   | Não         | Estágio em que a tarefa se encotra |
| coluna_id   | String   | Sim         | FK para Coluna                     |
