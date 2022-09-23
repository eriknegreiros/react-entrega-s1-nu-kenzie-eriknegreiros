import "./style.css";

const Form = () => {
  return (
    <section>
      <form>
        <div className="description_input">
          <label className="description_label" htmlFor="text">
            Descrição
          </label>
          <input
            className="input_text_description"
            type="text"
            placeholder="Digite aqui sua descrição"
          />
          <p className="example_description">Ex: Compra de roupas</p>
        </div>

        <div className="value_input">
          <div className="div_money">
            <label className="label_value" htmlFor="text">
              Valor
            </label>
            <input
              className="input_money"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              placeholder="R$"
            />
          </div>
          <div className="div_type_of_value">
            <label className="label_option" htmlFor="text">
              Valor
            </label>
            <select>
              <option>Entradas</option>
              <option>Despesas</option>
            </select>
          </div>
        </div>
        <div>
          <button className="btn_send_money">Inserir Valor</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
