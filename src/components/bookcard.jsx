//每一本书的bookcard组件
import style from "../css/bookcard.module.css"
import {useNavigate} from "react-router-dom"
const Bookcard=({children})=>{
    // 跳转详情
    const nav=useNavigate();
    const jumpToDetail=(event)=>{
        nav(`/book?id=${children.id}`);
    }
    return(
         <div className={style.bookcard} onClick={jumpToDetail}>
            <div className={style.pic}><img src={children.cover} alt=""  className={style.image} /></div>
            <div className={style.txt}>
                <div className={style.info}>{children.title}</div>
                <p className={style.price}>{`售价:${children.price/100} 元`}</p>
            </div>
       </div>
    );
};

export default Bookcard;