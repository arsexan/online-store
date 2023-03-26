import style from "./carditem.module.css";
/*
export const Carditem = ({ good }) => {
  return (
    <div className="card" style="width: 18rem;">
      <img src={good.image} className="card-img-top" alt={good.title} />
      <div className="card-body">
        <h5 className="card-title">{good.title}</h5>
        <p className="card-text">{good.description}</p>
        <button className="btn btn-primary">В корзину</button>
      </div>
    </div>
    /// JSX код, который содержит карточку товара и прокинутые пропсами данные good
  );
};

*/

export const Carditem = ({ good }) => {
    return (
      <div className={style.card__wrapper}>
        <img className={style.product__picture} src={good.pictures} alt={good.title} />
        <div>
          <h5>{good.price} руб.</h5>
          <p>{good.wight}</p>
          <p>{good.name}</p>
          <button className={style.tocart__button}>В корзину</button>
        </div>
      </div>
      /// JSX код, который содержит карточку товара и прокинутые пропсами данные good
    );
  };