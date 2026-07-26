import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

function TodoList({ todos, onToggle, onRemover }) {
  // Se não tiver nenhuma tarefa no filtro atual
  if (todos.length === 0) {
    return (
      <p className={styles.vazia}>Nenhuma tarefa encontrada.</p>
    );
  }

  return (
    <ul className={styles.lista}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemover={onRemover}
        />
      ))}
    </ul>
  );
}

export default TodoList;