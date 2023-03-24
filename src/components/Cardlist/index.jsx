import { useEffect, useState } from "react"
import { Carditem } from "../Carditem"
import style from './cardlist.module.css'

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwN2UwOWFhMzk3MTIxODM4ZjI4ZTAiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4ODAyNDQ2LCJleHAiOjE3MTAzMzg0NDZ9.VUIBiXleZ8Fp4rJWB3kyCL86TCUX3Nk-UZGnkXlrf0w'

export const Cardlist = () => {

    const [goods, setGoods] = useState([])

    useEffect(() => {
        const fetchDataAllGoods = async () => {
            const res = await fetch('https://api.react-learning.ru/products', {
                headers:{
                    Authorization: 'Bearer '+ TOKEN
                }
            })

             // отработать ошибки, если нет токена и тд.
            // if (res.ok) {
            const response = await res.json();
            console.log({response})
            //}
            setGoods(response.products)
        }

        fetchDataAllGoods()
    }, [])

    return(
        <div className={style.cardlist__productlist}>
            {goods.map((good) => {
                return(<Carditem key={good._id} good={good}/>)
            })}
        </div>
    )
}
