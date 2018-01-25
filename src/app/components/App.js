import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import Header from './Header'
import Sidebar from './Sidebar'

class App extends Component {

  componentWillUpdate(nextProps) {

  }

  render() {
    const { children, modals } = this.props

    return (
      <Row fill>
        <Layout>
          <Header />
        </Layout>
        <Layout shrink={1} grow={1}>
          <Column fill>
            <Layout>
              <Row basis='184px'>
                <Sidebar />
              </Row>
            </Layout>
            <Layout shrink={1} grow={1}>
              <Content>
                {children}
              </Content>
            </Layout>
          </Column>
        </Layout>
        {modals}
      </Row>
    )
  }
}

export default App
