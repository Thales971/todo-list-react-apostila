import styles from "./TodoItem.module.css";

function TodoItem({ todo, onToggle, onRemover }) {
  return (
    <li className={`${styles.item} ${todo.concluida ? styles.concluida : ""}`}>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={todo.concluida}
          onChange={() => onToggle(todo.id)}
          className={styles.checkbox}
        />
        <span className={styles.texto}>{todo.texto}</span>
      </label>

      <button
        className={styles.botaoRemover}
        onClick={() => onRemover(todo.id)}
        title="Remover tarefa"
      >
        ✕
      </button>
    </li>
  );
}

export default TodoItem;