import fms from "./Footer.module.css"

const Footer = () =>{
    return(
        <>
            <div className={fms.mainFooter}>
                <ul className={fms.inlineFooter}>
                    <li><a href=''><ion-icon name="logo-twitter"></ion-icon></a></li>
                    <li><a href=''><ion-icon name="logo-instagram"></ion-icon></a></li>
                    <li><a href=''><ion-icon name="logo-facebook"></ion-icon></a></li>
                    <li><a href=''><ion-icon name="chatbubbles-outline"></ion-icon></a></li>
                </ul>
                <h4 className={fms.h4}>It Academy inc.2021</h4>
            </div>
        </>
    )
}

export default Footer;

