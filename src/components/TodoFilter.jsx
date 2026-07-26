import styles from "./TodoFilter.module.css";

function TodoFilter({ filtro, setFiltro }) {
  const opcoes = [
    { valor: "todas", label: "Todas" },
    { valor: "pendentes", label: "Pendentes" },
    { valor: "concluidas", label: "Concluídas" },
  ];

  return (
    <div className={styles.filtros}>
      {opcoes.map((opcao) => (
        <button
          key={opcao.valor}
          className={`${styles.botao} ${filtro === opcao.valor ? styles.ativo : ""}`}
          onClick={() => setFiltro(opcao.valor)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;