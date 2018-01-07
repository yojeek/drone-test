import React from 'react'
import { Column, Layout, Row } from 'flex-layouts'
import { CompanyIcon, EmailIcon, PhoneIcon, UserIcon } from 'avisits-ui/src/icons'
import { ErrorBlock } from 'avisits-ui/src/content'
import { Button } from 'avisits-ui/src/button'
import { If } from 'avisits-ui/src/condition'
import { Input } from 'avisits-ui/src/input'
import { Panel } from 'avisits-ui/src/panel'
import { Text } from 'avisits-ui/src/text'
import { Link } from 'avisits-ui/src/link'

const Personal = ({ company, name, email, phone, errors, onChangeCompany, onChangeName, onChangePhone, onChangeEmail, onRegister, }) => (
  <Row>
    <If condition={errors.message}>
      <Layout>
        <Column>
          <Layout grow={1}/>
          <Layout basis='350px'>
            <Row>
              <Layout>
                <ErrorBlock>
                  <Text>
                    {errors.message}
                  </Text>
                </ErrorBlock>
              </Layout>
              <Layout basis='20px'/>
            </Row>
          </Layout>
          <Layout grow={1}/>
        </Column>
      </Layout>
    </If>
    <Layout>
      <Column>
        <Layout shrink={1} basis='350px'>
          <Panel>
            <Column>
              <Layout basis='40px'/>
              <Layout grow={1}>
                <Row>
                  <Layout basis='40px'/>
                  <Layout>
                    <Input
                      required
                      size='large'
                      name='company'
                      type='company'
                      placeholder='Название компании'
                      icon={(<CompanyIcon/>)}
                      value={company}
                      onChange={onChangeCompany}
                    />
                  </Layout>
                  <Layout basis='20px'/>
                  <Layout>
                    <Input
                      required
                      size='large'
                      name='name'
                      type='name'
                      placeholder='Имя'
                      icon={(<UserIcon/>)}
                      value={name}
                      onChange={onChangeName}
                    />
                  </Layout>
                  <Layout basis='20px'/>
                  <Layout>
                    <Input
                      required
                      size='large'
                      name='phone'
                      type='phone'
                      placeholder='Телефон'
                      icon={(<PhoneIcon/>)}
                      value={phone}
                      onChange={onChangePhone}
                    />
                  </Layout>
                  <Layout basis='20px'/>
                  <Layout>
                    <Input
                      required
                      size='large'
                      name='email'
                      type='email'
                      placeholder='Email'
                      icon={(<EmailIcon/>)}
                      value={email}
                      onChange={onChangeEmail}
                    />
                  </Layout>
                  <Layout basis='20px'/>
                  <Layout>
                    <Column justify='center'>
                      <Layout>
                        <Button
                          fill
                          color='success'
                          onClick={onRegister}
                        >
                          Регистрация
                        </Button>
                      </Layout>
                      <Layout basis='15px'/>
                      <Layout>
                        <Button
                          fill
                          color='secondary'
                          onClick={onPrevStep}
                        >
                          Назад
                        </Button>
                      </Layout>
                    </Column>
                  </Layout>
                  <Layout basis='40px'/>
                </Row>
              </Layout>
              <Layout basis='40px'/>
            </Column>
          </Panel>
        </Layout>
      </Column>
    </Layout>
    <Layout basis='30px'/>
  </Row>
)

export default Personal
