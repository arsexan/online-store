import style from "./footer.module.css";
import vk from './images/vk.png';
import insta from './images/instagram.png';
import whats from './images/whatsapp.png';
import telega from './images/telegram.png';
import footerlogo from './images/pawprint.png';

export const Footer = () => {
  return (
    <div className={style.footer__wrapper}>
      <div className={style.footer__group}>
        <img src={footerlogo} className={style.footer__logo}></img>
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
            <a href='vk'><img scr={vk} className={style.footer__social__logos}/></a>
            <a href='instagtam'><img scr={insta} className={style.footer__social__logos}/></a>
            <a href='whatsapp'><img scr={whats} className={style.footer__social__logos}/></a>
            <a href='telegram'><img scr={telega} className={style.footer__social__logos}/></a>
          </div>
        </div>
      </div>
    </div>
  );
};
