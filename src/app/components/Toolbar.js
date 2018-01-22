import React from 'react'
import { Link } from 'react-router-dom'

const Toolbar = () => (
  <div id="m_aside_left" className="m-grid__item  m-aside-left  m-aside-left--skin-dark ">
    <div id="m_ver_menu" 
      className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " 
      data-menu-vertical="true"
      data-menu-scrollable="false"
      data-menu-dropdown-timeout="500"  
    >
      <ul className="m-menu__nav">
        <li className="m-menu__item">
          <Link to='/networks' className="m-menu__link ">
            <i className="m-menu__link-icon la la-list"></i>
            <span className="m-menu__link-title">
              <span className="m-menu__link-wrap">
                <span className="m-menu__link-text">
                  Сети
                </span>
              </span>
            </span>
          </Link>
        </li>
        <li className="m-menu__item">
          <Link to='/salons' className="m-menu__link ">
            <i className="m-menu__link-icon la la-list"></i>
            <span className="m-menu__link-title">
              <span className="m-menu__link-wrap">
                <span className="m-menu__link-text">
                  Салоны
                </span>
              </span>
            </span>
          </Link>
        </li>
        <li className="m-menu__item">
          <a href="services.html" className="m-menu__link ">
            <i className="m-menu__link-icon la la-list"></i>
            <span className="m-menu__link-title">
              <span className="m-menu__link-wrap">
                <span className="m-menu__link-text">
                  Услуги
                </span>
              </span>
            </span>
          </a>
        </li>
        <li className="m-menu__item">
          <Link to='/positions' className="m-menu__link ">
            <i className="m-menu__link-icon la la-list"></i>
            <span className="m-menu__link-title">
              <span className="m-menu__link-wrap">
                <span className="m-menu__link-text">
                  Должности
                </span>
              </span>
            </span>
          </Link>
        </li>
        <li className="m-menu__item">
          <Link to='/employees' className="m-menu__link ">
            <i className="m-menu__link-icon la la-list"></i>
            <span className="m-menu__link-title">
              <span className="m-menu__link-wrap">
                <span className="m-menu__link-text">
                  Сотрудники
                </span>
              </span>
            </span>
          </Link>
        </li>
        <li className="m-menu__item">
          <a href="widget.html" className="m-menu__link ">
            <i className="m-menu__link-icon la la-list"></i>
            <span className="m-menu__link-title">
              <span className="m-menu__link-wrap">
                <span className="m-menu__link-text">
                  Виджет записи
                </span>
              </span>
            </span>
          </a>
        </li>
        <li className="m-menu__item">
          <a href="schedule.html" className="m-menu__link ">
            <i className="m-menu__link-icon la la-list"></i>
            <span className="m-menu__link-title">
              <span className="m-menu__link-wrap">
                <span className="m-menu__link-text">
                  График работы
                </span>
              </span>
            </span>
          </a>
        </li>
        <li className="m-menu__item">
          <a href="clients.html" className="m-menu__link ">
            <i className="m-menu__link-icon la la-list"></i>
            <span className="m-menu__link-title">
              <span className="m-menu__link-wrap">
                <span className="m-menu__link-text">
                  Клиенты
                </span>
              </span>
            </span>
          </a>
        </li>
        <li className="m-menu__item">
          <a href="form-visit.html" className="m-menu__link ">
            <i className="m-menu__link-icon la la-list"></i>
            <span className="m-menu__link-title">
              <span className="m-menu__link-wrap">
                <span className="m-menu__link-text">
                  Форма визита
                </span>
              </span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Toolbar
