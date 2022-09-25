import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  const total = Number(
    listTransactions.reduce((acc, va) => {
      if (va.type === "Entrada") {
        return acc + +va.value;
      }
      return (acc -= va.value);
    }, 0)
  );
  return (
    <section className="section_total_money">
      <div className="div_total_money">
        <div className="div_value_total_money">
          <h2 className="value_money_text">Valor Total</h2>
          <p className="value_money_total">
            {Number(total).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <p className="text_total_money">O valor se refere ao saldo</p>
      </div>
    </section>
  );
};

export default TotalMoney;
