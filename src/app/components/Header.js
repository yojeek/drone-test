import React from 'react'

const Header = ({ children }, { hasAccess }) => (
  <Row>
    <Layout>
      <Column>

      </Column>
    </Layout>
  </Row>
)

Header.contextTypes = {
  hasAccess: PropTypes.func,
}

export default Header
