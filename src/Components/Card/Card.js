import cms from "./Card.module.css"
import { Cardlist } from "../../Utils/Cardlist";

const Card = () =>{
    return(
        <>
        <div className={cms.main}>
            <div className={cms.mainBanner}>
                <div className={cms.block1Banner}></div>
            </div>
            <div className={cms.mainBlock}>
                <div className={cms.mainCatalog}>
                    <ul className={cms.catalog}>
                        <li><a href=''>Asus</a></li>
                        <li><a href=''>Lenovo</a></li>
                        <li><a href=''>HP</a></li>
                        <li><a href=''>Acer</a></li>
                        <li><a href=''>Honor</a></li>
                        <li><a href=''>Huawei</a></li>
                        <li><a href=''>Apple</a></li>
                        <li><a href=''>Dell</a></li>
                    </ul>
                </div>
                <div className={cms.mainContainer}>
                    <div className={cms.container}>
                        {
                            Cardlist.map(item =>(
                                <div className={cms.mainCard}>
                                    <div className={cms.card}>
                                        <img src={item.img} />
                                        <h3>{item.model}</h3>
                                        <h4>{item.price} руб.</h4>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Card;