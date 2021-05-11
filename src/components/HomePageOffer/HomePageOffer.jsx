import React from "react";

const HomePageOffer = props => (
  <>
    <header className="HomeHeader">
      <div className="HomeHeader__title">Need for drive</div>
      <div className="HomePageTown"><img className="GeoPin" src="img/geo_pin.svg" alt="Город" /> Ульяновск</div>
    </header>

    <section className="Offer">
      <div className="Offer__title">Каршеринг</div>
      <div className="Offer__title_accent">Need for drive</div>
      <div className="Offer__sub-title">Поминутная аренда авто твоего города</div>
      <button>Забронировать</button>
    </section>

    <footer className="HomeFooter">
      <div>© 2016-2019 «Need for drive»</div>
      <div>8 (495) 234-22-44</div>
    </footer>
  </>
)

export default HomePageOffer;