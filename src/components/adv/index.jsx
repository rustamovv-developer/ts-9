import React from "react";
import "../../sass/adv.scss";

const Adv = () => {
  return (
    <div className="adv" id="adv">
      <div className="container">
        <div className="adv__wrapper">
          <div className="adv__left">
            <h3 className="adv__h3">Месяц красных цен</h3>
            <h4 className="adv__h4">Из Китая</h4>
          </div>
          <div className="adv__right">
            <p className="adv__text">Chilonzor tumani</p>
            <p className="adv__text">RU</p>
            <p className="adv__text">UZS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adv;
