import './navBar.css'

const NavBar = () => {
    return (
        <nav>
            <ul className="menu">
                <li className="menu_item">
                    <a href="#main" className="menu_link">Главная</a>
                </li>
                <li className="menu_item">
                    <a href="#advantages" className="menu_link">Преимущества </a>
                </li>
                <li className="menu_item">
                    <a href="#services" className="menu_link">Услуги</a>
                </li>
                <li className="menu_item">
                    <a href="#prices" className="menu_link">Цены</a>
                </li>
                <li className="menu_item">
                    <a href="#request" className="menu_link">Отправить заявку</a>
                </li>
                <li className="menu_item">
                    <div className="menu_phone">+7-900-297-47-44</div>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar