import React from 'react'
import { Column, Layout } from 'flex-layouts'
import { MenuNavLink } from 'src/ui/link'

const messages = defineMessages({
  networks: {
    id: 'nav.networks',
    defaultMessage: 'Сети',
  },
  salons: {
    id: 'nav.salons',
    defaultMessage: 'Салоны',
  },
  services: {
    id: 'nav.services',
    defaultMessage: 'Услуги',
  },
  positions: {
    id: 'nav.positions',
    defaultMessage: 'Должности',
  },
  employees: {
    id: 'nav.employees',
    defaultMessage: 'Сотрудники',
  },
  widget: {
    id: 'nav.widget',
    defaultMessage: 'Виджет записи',
  },
  schedule: {
    id: 'nav.schedule',
    defaultMessage: 'График работы',
  },
  clients: {
    id: 'nav.clients',
    defaultMessage: 'Клиенты',
  },
  visitForm: {
    id: 'nav.visitForm',
    defaultMessage: 'Форма визита',
  },
})

const Sidebar = ({intl}) => (
  <Column fill>
    <Layout>
      <MenuNavLink to='/networks'>
        { intl.formatMessage(messages.networks) }
      </MenuNavLink>
    </Layout>
    <Layout basis='12px'/>
    <Layout>
      <MenuNavLink to='/salons'>
        { intl.formatMessage(messages.salons) }
      </MenuNavLink>
    </Layout>
    <Layout basis='12px'/>
    <Layout>
      <MenuNavLink to='/services'>
        { intl.formatMessage(messages.services) }
      </MenuNavLink>
    </Layout>
    <Layout basis='12px'/>
    <Layout>
      <MenuNavLink to='/positions'>
        { intl.formatMessage(messages.positions) }
      </MenuNavLink>
    </Layout>
    <Layout basis='12px'/>
    <Layout>
      <MenuNavLink to='/employees'>
        { intl.formatMessage(messages.employees) }
      </MenuNavLink>
    </Layout>
    <Layout basis='16px'/>
    <Layout>
      <Divider/>
    </Layout>
    <Layout basis='16px'/>
    <Layout>
      <MenuNavLink to='/widget'>
        { intl.formatMessage(messages.widget) }
      </MenuNavLink>
    </Layout>
    <Layout basis='12px'/>
    <Layout>
      <MenuNavLink to='/clients'>
        { intl.formatMessage(messages.clients) }
      </MenuNavLink>
    </Layout>
    <Layout basis='12px'/>
    <Layout>
      <MenuNavLink to='/schedule'>
        { intl.formatMessage(messages.schedule) }
      </MenuNavLink>
    </Layout>
    <Layout basis='12px'/>
    <Layout>
      <MenuNavLink to='/visit-form'>
        { intl.formatMessage(messages.visitForm) }
      </MenuNavLink>
    </Layout>
  </Column>
)

export default Sidebar
