import React from "react";

const HomePageSlider = props => {
  return <>
    <div className="Slide slide1">
      <h4 className="Slide__header">Бесплатная парковка</h4>
      <div className="Slide__subtitle">Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая
        ПДД, а также в аэропортах.
      </div>
      <button className="Slide__buttonDetail">Подробнее</button>
      <div className="Slide__buttonNext"></div>
      <div className="Slide__buttonPrev"></div>
    </div>
  </>
}

export default HomePageSlider;