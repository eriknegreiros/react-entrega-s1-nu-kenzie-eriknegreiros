import "./style.css";
import { useState } from "react";

const Form = ({ listTransaction, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [money, setMoney] = useState(0);
  const [type, setType] = useState("Entrada");

  const handleSubmit = (event) => {
    event.preventDefault();
    const properties = {
      description: description,
      value: money,
      type: type,
    };
    setListTransactions([...listTransaction, properties]);
  };

  return (
    <section>
      <form required onSubmit={handleSubmit}>
        <div className="description_input">
          <label className="description_label" htmlFor="text">
            Descrição
          </label>
          <input
            required
            className="input_text_description"
            type="text"
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setDescription(event.target.value)}
          />
          <p className="example_description">Ex: Compra de roupas</p>
        </div>

        <div className="value_input">
          <div className="div_money">
            <label className="label_value" htmlFor="text">
              Valor
            </label>
            <input
              required
              className="input_money"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              placeholder="R$"
              onChange={(event) => setMoney(event.target.value)}
            />
          </div>
          <div className="div_type_of_value">
            <label className="label_option" htmlFor="text">
              Valor
            </label>
            <select required onChange={(event) => setType(event.target.value)}>
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>
        <div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn_send_money"
          >
            Inserir Valor
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
