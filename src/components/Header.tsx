import { NavLink } from 'react-router-dom';
import logo from '../icons/hoxton-logo.jpg';

function Header(){
    return (
        <header className="header">
            <div className="logo">
            <img className = 'logo-icon' src={logo}/>
            <h1>Hoxton Quotes</h1>
            </div>
            <nav className="menu-bar">
            <ul className = 'menu-bar__list'>
                <NavLink to = '/quotes'><li className="menu-bar__list__item">Home</li></NavLink>
                <NavLink to='/authors'><li className="menu-bar__list__item">Authors</li></NavLink>
                <NavLink to ='/random-quotes'><li className="menu-bar__list__item">Random Quotes</li></NavLink>
                <NavLink to ='/Quote-of-the-day'><li className="menu-bar__list__item">Quote of the day</li></NavLink>
            </ul>
            </nav>
      </header>
    )
}
export default Header