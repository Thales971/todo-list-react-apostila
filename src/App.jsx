import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

function App() {
  const [todos, setTodos] = useState(() => {
    const salvos = localStorage.getItem("todos");
    return salvos ? JSON.parse(salvos) : [];
  });

  const [filtro, setFiltro] = useState("todas");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function adicionarTodo(texto) {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        texto,
        concluida: false,
      },
    ]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, concluida: !todo.concluida } : todo
      )
    );
  }

  function removerTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const todosFiltrados = todos.filter((todo) => {
    if (filtro === "pendentes") return !todo.concluida;
    if (filtro === "concluidas") return todo.concluida;
    return true;
  });

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      <TodoForm onAdicionar={adicionarTodo} />
      <TodoFilter filtro={filtro} setFiltro={setFiltro} />

      <TodoList
        todos={todosFiltrados}
        onToggle={toggleTodo}
        onRemover={removerTodo}
      />

      <p className="contador">
        {todos.filter((t) => !t.concluida).length} tarefa(s) restante(s)
      </p>
    </div>
  );
}

export default App;