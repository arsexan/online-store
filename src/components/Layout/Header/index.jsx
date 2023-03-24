import style from './header.module.css'

export const Header = () => {
  return (
    <header>
    <div className={style.header_wrapper}>
        <img src='#' />
        <input className={style.header__search} type="search" placeholder="Что хотите найти?" ></input>
        <div className={style.header__controls}>
            <a href="#favourite"><img src='#'/></a>
            <a href="#cart"><img src='#'/></a>
            <a href="#home"><img src='#'/></a>
        </div>
    </div>
    </header>
  ) 
};