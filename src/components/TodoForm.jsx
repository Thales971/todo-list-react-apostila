import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ onAdicionar }) {
  const [texto, setTexto] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // evita o reload da página

    // Não adiciona tarefa vazia
    if (texto.trim() === "") return;

    onAdicionar(texto.trim());
    setTexto(""); // limpa o campo depois de adicionar
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite uma nova tarefa..."
      />
      <button type="submit" className={styles.botao}>
        Adicionar
      </button>
    </form>
  );
}

export default TodoForm;