import style from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={style.footer__wrapper}>
      <div className={style.footer__group}>
        <img src='#'></img>
        <div>"Интернет-магазин DogFood.ru"</div>
        </div>  
      <div className={style.footer__group}>
        <div className={style.footer__links}>
          <a href='#'>Каталог</a>
          <a href='#'>Акции</a>
          <a href='#'>Новости</a>
          <a href='#'>Отзывы</a>
        </div>
      </div>
      <div className={style.footer__group}>
        <div className={style.footer__links}>
          <a href='#'>Оплата и доставка</a>
          <a href='#'>Часто спрашивают</a>
          <a href='#'>Обратная связь</a>
          <a href='#'>Контакты</a>
        </div>
      </div>
      <div className={style.footer__group}>
        <div className={style.footer__links}>
          <span>Мы на связи</span>
          <a href="tel:74959999999">9 (999) 000-00-00</a>
          <a href='dogfood.ru@gmail.com'>dogfood.ru@gmail.com</a>
          <div className={style.footer__social__wrapper}>
            <a href='#'><img scr='#'/></a>
            <a href='#'><img scr='#'/></a>
            <a href='#'><img scr='#'/></a>
            <a href='#'><img scr='#'/></a>
            <a href='#'><img scr='#'/></a>
          </div>
        </div>
      </div>
    </div>
  );
};
