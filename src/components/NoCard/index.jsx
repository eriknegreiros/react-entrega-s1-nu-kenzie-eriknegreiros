import "./style.css";
import image from "../../assets/NoCard.png";

const NoCard = () => {
  return (
    <section>
      <div className="no_card_div">
        <h1 className="text_no_card">Você ainda não possui nenhum lançamento</h1>
        <img className="img_no_card" src={image} alt="" />
      </div>
    </section>
  );
};

export default NoCard;
