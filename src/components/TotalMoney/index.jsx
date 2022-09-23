import "./style.css";

const TotalMoney = () => {
  return (
    <section className="section_total_money">
      <div className="div_total_money">
        <div className="div_value_total_money">
          <h2 className="value_money_text">Valor Total</h2>
          <p className="value_money_total">R$8546,00</p>
        </div>
        <p className="text_total_money">O valor se refere ao saldo</p>
      </div>
    </section>
  );
};

export default TotalMoney;
