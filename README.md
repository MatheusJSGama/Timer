# ⏱️ Ignite Timer

- Aplicação de timer estilo Pomodoro desenvolvida com React e TypeScript. Possui funcionalidades de contagem regressiva, criação e histórico de ciclos, persistência no localStorage e gerenciamento global de estado com Context API.

# 🎞️ Vídeo da aplicação

https://github.com/user-attachments/assets/d3bfe5c6-4890-4263-8097-4a8a170c1fc3

## 🚀 Tecnologias Utilizadas

### ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- Construção da interface com componentes reutilizáveis.

### ![TypeScript](https://img.shields.io/badge/TypeScript-007acc?style=for-the-badge&logo=typescript&logoColor=white)
- Tipagem estática e segurança no desenvolvimento.
- Definição de tipos como `Cycle`, `CyclesContextType`, `CreateCycleData`.

###  ![Styled-Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
- Este projeto utiliza Styled Components para aplicar estilos de forma elegante e escalável, diretamente nos componentes React. Essa abordagem permite:

- Criação de estilos com escopo local aos componentes.
- Uso de props dinâmicas para alterar o estilo com base no estado.
- Definição de temas globais reutilizáveis, como em styles/themes/default.ts.
- Organização clara com arquivos styles.ts ao lado de cada index.tsx de componente ou página.

### ![React Hook Form](https://img.shields.io/badge/React--Hook--Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
- Gerenciamento de formulários.
- Aplicado no formulário de criação de novo ciclo.

### ![Zod](https://img.shields.io/badge/Zod-8c52ff?style=for-the-badge)
- Validação de dados do formulário com schemas.
- Valida campos como `task` e `minutesAmount` antes de permitir iniciar um ciclo.

### ![Context API](https://img.shields.io/badge/Context%20API-61dafb?style=for-the-badge&logo=react&logoColor=white)
- Gerenciamento global de estado para ciclos.
- Compartilhamento de dados como ciclo ativo, criação e interrupção de ciclos.

### ![Date-fns](https://img.shields.io/badge/date--fns-3f6a9d?style=for-the-badge)
- Manipulação e formatação de datas.
- Cálculo do tempo restante e tempo decorrido nos ciclos.

### ![LocalStorage](https://img.shields.io/badge/LocalStorage-ffa500?style=for-the-badge)
- Persistência dos dados dos ciclos no navegador.
- Retomada automática do estado após recarregar a página.

### ![Phosphor Icons](https://img.shields.io/badge/Phosphor%20Icons-000000?style=for-the-badge)
- Ícones elegantes para botões e feedback visual.
---

## 📂 Estrutura de Pastas

```bash
src/ 
├── @types/
├── assets/ 
├── components/
├── context/
├── layouts/
├── pages/
│ ├── Home/ 
│ │   └── components/
│ │       ├──  Countdown
│ │       └──  NewCycleForm 
│ └── History/
├── reducers/
├── routes/
├── styles/
└── main.tsx

```

## ✅ Funcionalidades

- Iniciar novo ciclo com tarefa e tempo
- Contagem regressiva precisa com visibilidade global
- Interromper ciclo em andamento
- Histórico completo de ciclos realizados
- Persistência do progresso via `localStorage`

## 📌 Como Rodar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/MatheusJSGama/Timer.git
```

2. Instale as dependências:
```bash
npm install
```
2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

📝 Licença
[MIT](https://choosealicense.com/licenses/mit/)
