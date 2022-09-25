const Button = ({ listTransactions }) => {
  const enter = () => {
    const enterFiltered = listTransactions.filter(
      (element) => element.type === "Entrada"
    );
    return enterFiltered;
  };

  const expense = () => {
    const expenseFiltered = listTransactions.filter(
      (element) => element.type === "Despesa"
    );
    return expenseFiltered;
  };

  return (
    <section className="section_finances">
      <div className="div_finances">
        <h1 className="text_resume_finances">Resumo Financeiro</h1>
        <div className="div_btn_finances">
          <button className="btn_finances">Todos</button>
          <button onClick={enter} className="btn_finances">
            Entradas
          </button>
          <button onClick={expense} className="btn_finances">
            Despesas
          </button>
        </div>
      </div>
    </section>
  );
};

export default Button;
