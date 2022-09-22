import "./style.css";

import img from "../../assets/indexImg.png";

const Index = () => {
  return (
    <main>
      <div className="all_content">
        <div className="div_text">
          <h1 className="title_name">Nu Kenzie</h1>
          <h2 className="info_resume">
            Centralize o controle das suas finanças
          </h2>
          <p className="info-text">de forma rápida e segura</p>
          <button className="btn_init">Iniciar</button>
        </div>
        <div className="div_img">
          <img className="img_app" src={img} alt="painel" />
        </div>
      </div>
    </main>
  );
};

export default Index;
