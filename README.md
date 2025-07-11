# API com Node.js, Express e TypeORM

<p align="left">
  <img src="https://img.shields.io/badge/status-CONCLUÍDO-brightgreen" alt="Status do Projeto">
  <img src="https://img.shields.io/github/license/Wirizada/api-node-typeORM" alt="Licença">
  </p>

> API RESTful desenvolvida como projeto de estudo para aplicar conceitos de TypeScript, TypeORM e testes automatizados com Jest em um ambiente Node.js.

<br>

## ✨ Features

- [x] CRUD completo
- [x] Validação de dados de entrada.
- [x] Tratamento de erros centralizado.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**
* **TypeScript**
* **Express**
* **TypeORM**
* **SQLite**
* **Jest**

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
* **Git, Node.js, NPM/Yarn**

### Rodando o Projeto

```bash
# 1. Clone o repositório e acesse a pasta
git clone [https://github.com/Wirizada/api-node-typeORM.git](https://github.com/Wirizada/api-node-typeORM.git)
cd api-node-typeORM

# 2. Instale as dependências
npm install

# 3. Rode as migrations do TypeORM
npm run typeorm:migration:run 
# (CONFIRME O COMANDO NO SEU package.json)

# 4. Execute a aplicação
npm run dev 
# (CONFIRME O COMANDO NO SEU package.json)

# O servidor será iniciado na porta 3333 (ou outra que você configurou)
```
