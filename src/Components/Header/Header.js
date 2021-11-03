import hms from "./Header.module.css"

const Header = () =>{
    return(
        <>
            <div className={hms.mainHeader}>
                <div className={hms.nav}>
                    <ul className={hms.inlineHeader}>
                        <a className={hms.navLogo} href=""><h2>MUNi's </h2></a>
                        <input className={hms.navSearch} placeholder="MacBook Pro 16" />
                        <li><a href="">Игровые</a></li>
                        <li><a href="">Для учебы</a></li>
                        <li><a href="">Ультробуки</a></li>
                        <li><a href="">MacBooks</a></li>
                        <input className={hms.navSearch2} placeholder="MacBook Pro 16" />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;