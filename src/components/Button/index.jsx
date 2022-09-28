import { useState } from "react";
import { useEffect } from "react";

const Button = ({ listTransaction, setListTransactionFiltered }) => {
  const [activeFilter, setActiveFilter] = useState("todos");

  useEffect(() => {
    const listaFiltrada = listTransaction.filter(
      (element) => element.type === activeFilter
    );

    setListTransactionFiltered(listaFiltrada);
  }, [listTransaction, activeFilter]);

  return (
    <section className="section_finances">
      <div className="div_finances">
        <h1 className="text_resume_finances">Resumo Financeiro</h1>
        <div className="div_btn_finances">
          <button
            onClick={() => setActiveFilter("todos")}
            className="btn_finances"
          >
            Todos
          </button>
          <button
            onClick={() => setActiveFilter("Entrada")}
            className="btn_finances"
          >
            Entradas
          </button>
          <button
            onClick={() => setActiveFilter("Despesa")}
            className="btn_finances"
          >
            Despesas
          </button>
        </div>
      </div>
    </section>
  );
};

export default Button;
