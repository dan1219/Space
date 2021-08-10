import React from 'react'
import './Header.css'
import logo from '../img/spacex_logo.png'

const Header = () => {
  return (<header>

    <label className='menu__label' for="toggle">&#9776;</label>
    <input className='menu__checkbox' type='checkbox' id='toggle'/>

    <div class='menu_wrapper'>
      <div className='logo_wrapper'><img className='logo' src={logo} alt="logo"/></div>
      <ul className='header__list'>
        <li className='header__list-item'>
          <a href='#'>Главная</a>
        </li>
        <li className='header__list-item header__list-item-active'>
          <a href='#'>Технология</a>
        </li>
        <li className='header__list-item'>
          <a href='#'>График полетов</a>
        </li>
        <li className='header__list-item'>
          <a href='#'>Гарантии</a>
        </li>
        <li className='header__list-item'>
          <a href='#'>О компании</a>
        </li>
        <li className='header__list-item'>
          <a href='#'>Контакты</a>
        </li>
      </ul>
    </div>

  </header>)
}

export default Header
