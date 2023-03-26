import style from './header.module.css'
import logo from './images/pawprint.png'
import like from './images/heart.png'
import cart from './images/shopping-bag.png'

export const Header = () => {
  return (
    <header>
    <div className={style.header_wrapper}>
        <img src={logo} className={style.header__logo} />
        <input className={style.header__search} type="search" placeholder="Что хотите найти?" ></input>
        <div className={style.header__controls}>
            <a href="#favourite"><img src={like} className={style.header__menu__item}/></a>
            <a href="#cart"><img src={cart} className={style.header__menu__item}/></a>
            <a href="#home"><img src={logo} className={style.header__menu__item}/></a>
        </div>
    </div>
    </header>
  ) 
};