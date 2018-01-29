import React from 'react'
import { Row, Layout } from 'flex-layouts'

const Header = () => (
  <Row>
    <Layout basis='60px'>
      <header>
        <div className='m-container m-container--fluid m-container--full-height'>
          <div className='m-stack m-stack--ver m-stack--desktop'>
            <div className='m-stack__item m-brand  m-brand--skin-dark '>
              <div className='m-stack m-stack--ver m-stack--general'>
                <div className='m-stack__item m-stack__item--middle m-brand__logo'>
                  <a href='' className='m-brand__logo-wrapper m--hidden-tablet-and-mobile'>
                    {/*<Logo />*/}
                  </a>
                  <h3 className='m--visible-tablet-and-mobile m--font-white m-0'>Сети</h3>
                </div>
                <div className='m-stack__item m-stack__item--middle m-brand__tools'>
                  <a href='javascript:;' id='m_aside_left_minimize_toggle'
                     className='m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block'>
                  </a>
                  <a href='javascript:;' id='m_aside_left_offcanvas_toggle'
                     className='m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block'>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  </Row>
)

export default Header
