# DevJobs

Aplicação web desenvolvida em **React** para listar vagas de tecnologia e permitir que usuários pesquisem e se candidatem a oportunidades.

## Tecnologias utilizadas

* React
* Vite
* Styled Components
* JavaScript
* CSS Grid

## Funcionalidades

* Listagem de vagas de tecnologia
* Busca de vagas por:

  * título
  * empresa
  * local
* Layout responsivo (mobile, tablet e desktop)
* Botão de candidatura que remove a vaga da lista
* Interface construída com componentes reutilizáveis

## Estrutura do projeto

src/
components/
Header/
Hero/
Form/
ListaVagas/
Vagas/

Cada pasta representa um **componente React** contendo:

* `index.jsx` → lógica do componente
* `styles.js` → estilização com styled-components

## Como executar o projeto

1. Clonar o repositório

```bash
git clone https://github.com/Uillian-Freitas/devjobs.git
```

2. Entrar na pasta do projeto

```bash
cd devjobs
```

3. Instalar dependências

```bash
npm install
```

4. Rodar o projeto

```bash
npm run dev
```

O projeto estará disponível em:

```
http://localhost:5173
```

## Próximas melhorias

* Integração com API de vagas
* Sistema de candidatura real
* Paginação de vagas
* Melhorias de UI
* Testes automatizados

## Autor

Projeto desenvolvido por **Uillian Freitas** durante os estudos de desenvolvimento front-end.
