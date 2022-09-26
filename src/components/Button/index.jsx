const Button = ({ listTransaction, setListTransactionFiltered, listTransactionFiltered }) => {
  
  const enter = () => {
    const enterFiltered = listTransaction.filter(
      (element) => element.type === "Entrada"
    );
    setListTransactionFiltered(enterFiltered) ;

  };

  const expense = () => {
    const expenseFiltered = listTransaction.filter(
      (element) => element.type === "Despesa"
    );
    setListTransactionFiltered(expenseFiltered)  ;
  };

  const all = () => {
    const enterFiltered = listTransaction.filter(
      (element) => element.type === "Entrada" || element.type === "Despesa"
    );
    setListTransactionFiltered(enterFiltered) ;
    
  };

  return (
    <section className="section_finances">
      <div className="div_finances">
        <h1 className="text_resume_finances">Resumo Financeiro</h1>
        <div className="div_btn_finances">
          <button onClick={all} className="btn_finances">Todos</button>
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
