import React from 'react'
import { Layout } from 'flex-layouts'
import { Menu, MenuItem } from 'ui/menu'

const Sidebar = () => (
  <Menu width={185}>
    <MenuItem to='/networks'>
      Сети
    </MenuItem>
    <Layout basis='12px'/>
    <MenuItem to='/salons'>
      Салоны
    </MenuItem>
    <Layout basis='12px'/>
    <MenuItem to='/services'>
      Услуги
    </MenuItem>
    <Layout basis='12px'/>
    <MenuItem to='/positions'>
      Должности
    </MenuItem>
    <Layout basis='12px'/>
    <MenuItem to='/employees'>
      Сотрудники
    </MenuItem>
    <Layout basis='16px'/>
    <MenuItem to='/widget'>
      Виджет записи
    </MenuItem>
    <Layout basis='12px'/>
    <MenuItem to='/clients'>
      График работы
    </MenuItem>
    <Layout basis='12px'/>
    <MenuItem to='/schedule'>
      Клиенты
    </MenuItem>
    <Layout basis='12px'/>
    <MenuItem to='/visit-form'>
      Форма визита
    </MenuItem>
  </Menu>
)

export default Sidebar
