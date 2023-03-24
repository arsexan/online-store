import style from './main.module.css'
import { Cardlist } from "../../Cardlist"


export const Main = () => {
    return (
        <div className="container">
        <main className={style.main_wrapper}>
            <div className={style.main__productlist}><Cardlist/></div>
        </main>
        </div>
    )
}
