import "./style.css";
import img from "../../assets/trash.png";

const Card = ({ transaction }) => {
  return (
    <section className="section_card">
      <div className="all_card">
        <div className={transaction.type === "Entrada" ? "enter" : "expense"}>
          <div className="elements_card">
            <p className="text_card">{transaction.description}</p>
            <p className="value_card">
              {Number(transaction.value).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <button className="btn_card">
              <img src={img} alt="" />
            </button>
          </div>
          <p className="type_card">{transaction.type}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
