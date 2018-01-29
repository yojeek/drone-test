import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import Header from './Header'
import Sidebar from './Sidebar'

const App = ({ children }) => [
  <Column>
    <Layout>
      <Sidebar />
    </Layout>
    <Layout shrink={1} grow={1}>
      <Row>
        <Layout>
          <Header />
        </Layout>
        <Layout shrink={1} grow={1}>
          {children}
        </Layout>
      </Row>
    </Layout>
  </Column>
]

export default App
