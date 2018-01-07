import React from 'react'
import { Column, Row, Layout } from 'flex-layouts'
import { Text, Space } from 'avisits-ui/src/text'
import { RouteLink } from 'avisits-ui/src/link'
import { Divider } from 'avisits-ui/src/divider'

const Success = ({ email }) => (
  <Row>
    <Layout basis='20px' />
    <Layout justify='center'>
      <Text>
        Подтверждение email адреса
      </Text>
    </Layout>
    <Layout basis='20px' />
    <Layout>
      <Divider />
    </Layout>
    <Layout basis='30px' />
    <Layout>
      <Column>
        <Layout grow={1} />
        <Layout shrink={1} basis='380px'>
          <Row>
            <Layout justify='center'>
              <Text>
                Мы отправили письмо на
              </Text>
            </Layout>
            <Layout basis='8px' />
            <Layout justify='center'>
              <Text>
                {email}
              </Text>
            </Layout>
            <Layout basis='12px' />
            <Layout justify='center'>
              <Text>
                Которое содержит инструкции для подтверждения вашего email адреса.
              </Text>
            </Layout>
          </Row>
        </Layout>
        <Layout grow={1} />
      </Column>
    </Layout>
    <Layout basis='30px' />
    <Layout>
      <Column>
        <Layout basis='30px' />
        <Layout grow={1}>
          <Divider />
        </Layout>
        <Layout basis='30px' />
      </Column>
    </Layout>
    <Layout basis='20px' />
    <Layout>
      <Column>
        <Layout grow={1} />
        <Layout>
          <Text size='xsmall'>
            Не получили письмо?
          </Text>
          <Space />
          <RouteLink to='/auth/login'>
            <Text>
              Выслать снова
            </Text>
          </RouteLink>
        </Layout>
        <Layout grow={1} />
      </Column>
    </Layout>
    <Layout basis='20px' />
  </Row>
)

export default Success
