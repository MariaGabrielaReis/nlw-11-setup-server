
<div align="center"> <img src="https://user-images.githubusercontent.com/69374340/213943794-f9be3937-c551-4610-b0cd-d8b74f5b5ffc.png" /> </div>

API para o projeto HABITS, um app permite criar e acompanhar hábitos através de formulários e checklists diárias ✔️ <br>
**Aplicação construída no evento Next Level Week: Setup, promovido pela Rocketseat** 🚀

> :hammer_and_wrench: Tecnologias e ferramentas: **TypeScript, Node, Fastify, Prisma, SQLite, Dayjs, Zod, Insomnia**

## :gear: Como rodar

Com o [Node](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/) e [Git](https://git-scm.com/) instalados, siga o tutorial abaixo:

```bash
# Clone esse repositório
$ git clone https://github.com/MariaGabrielaReis/nlw-11-setup-server.git

# Instale as dependências do projeto, assim como suas tipagens
$ yarn

# Execute a aplicação
$ yarn dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333
```

> Use o Insomnia, por exemplo, para realizar as requisições (importe a coleção [deste arquivo](./requests_collection))

## :railway_track: Rotas
Endpoints disponíveis para gerenciamento de <b>Hábitos</b>:

|                                                                  Tipo | Ação                                 | Caminho              | 
| --------------------------------------------------------------------: | :----------------------------------- | :------------------- |
|  [![](https://img.shields.io/badge/GET-349d62?style=for-the-badge)]() | Listar hábitos de um dia             | `/day`               |
| [![](https://img.shields.io/badge/POST-4682B4?style=for-the-badge)]() | Criar um hábito                      | `/habits`            |
|[![](https://img.shields.io/badge/PATCH-f2d054?style=for-the-badge)]() | Marcar / desmarcar hábito como feito | `/habits/:id/toggle` | 
|  [![](https://img.shields.io/badge/GET-349d62?style=for-the-badge)]() | Listar sumário de hábitos            | `/summary`           |

<br>

[![image](https://img.shields.io/badge/✨%20Maria%20Gabriela%20Reis,%202023-LinkedIn-0D9488?style=flat-square)](https://www.linkedin.com/in/mariagabrielareis/)
