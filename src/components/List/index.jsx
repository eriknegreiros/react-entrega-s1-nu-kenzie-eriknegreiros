import "./style.css";

const List = () => {
  return (
    <section className="section_finances">
      <div className="div_finances">
        <h1 className="text_resume_finances">Resumo Financeiro</h1>
        <div className="div_btn_finances">
          <button className="btn_finances">Todos</button>
          <button className="btn_finances">Entradas</button>
          <button className="btn_finances">Despesas</button>
        </div>
      </div>
    </section>
  );
};

export default List;
