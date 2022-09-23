import "./style.css";

import img from '../../assets/trash.png'

const Card = () => {
  return (
    <section className="section_card">
      <div className="all_card">
        
        <div className="card_Individual">
            <div className="elements_card">
                <p className="text_card">Salário - Mês Dezembro</p>
                <p className="value_card">R$ 6.660,00</p>
                <button className="btn_card"><img src={img} alt="" /></button>
            </div>
        </div>

        <div className="card_Individual">
            <div className="elements_card">
                <p className="text_card">Salário - Mês Dezembro</p>
                <p className="value_card">R$ 6.660,00</p>
                <button className="btn_card"><img src={img} alt="" /></button>
            </div>
        </div>

        <div className="card_Individual">
            <div className="elements_card">
                <p className="text_card">Salário - Mês Dezembro</p>
                <p className="value_card">R$ 6.660,00</p>
                <button className="btn_card"><img src={img} alt="" /></button>
            </div>
        </div>

        
      
      </div>
    </section>
  );
};

export default Card;
