# Lista de Tarefas - React

Projeto completo desenvolvido para o **Desafio Extra** da Apostila de React JS  
**SENAI Valinhos – Front-End 2 – Turma 2TDS2**

Alunos: **Thales Torsatto Silva** e **Lucas Tavares Bento**

---

## Funcionalidades

- Adicionar nova tarefa
- Marcar tarefa como concluída
- Remover tarefa
- Filtros (Todas / Pendentes / Concluídas)
- Persistência no `localStorage`
- Contador de tarefas restantes

## Como rodar

```bash
npm install
npm run dev
```

Abre em: [http://localhost:5173](http://localhost:5173)

## Estrutura do projeto

```
src/
├── components/
│   ├── TodoForm.jsx       # formulário de adicionar
│   ├── TodoItem.jsx       # item individual da lista
│   ├── TodoList.jsx       # lista completa
│   └── TodoFilter.jsx     # botões de filtro
├── App.jsx                # componente principal + estado
├── main.jsx
└── index.css
```

## Conceitos de React utilizados

- `useState` para gerenciar a lista de tarefas e o filtro ativo
- `useEffect` para carregar e salvar no localStorage
- Componentes funcionais + props
- Renderização de listas com `map` + `key`
- Renderização condicional
- Eventos (`onClick`, `onChange`, `onSubmit`)
- Formulário controlado
