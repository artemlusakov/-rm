import {Link} from "react-router-dom";
import s from "./NotFound.module.css"

export default function NotFound (){


    return <div className={s.NotFound}>
        <h2>Ошибка 404</h2>
        <Link to={"/"} > Вернутся Домой </Link>
    </div>;
}