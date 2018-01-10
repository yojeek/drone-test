import React from 'react'
import { Column, Layout } from 'flex-layouts'
import { CheckIcon } from '../icons'
import { Text } from '../text'
import optionHoc from './optionHoc'

const MultiOption = ({ children, option, isSelected }) => (
  <Column>
    <Layout align='center' basis='18px'>
      <span style={{ visibility: isSelected ? 'visible' : 'hidden' }}>
        <CheckIcon height={12} />
      </span>
    </Layout>
    <Layout shrink={1} grow={1} align='center'>
      {children}
    </Layout>
    {option.description && (
      <Layout shrink={1} grow={1} />
    )}
    <Layout>
      <div style={{ marginLeft: 20 }}>
        <Text>
          {option.description || null}
        </Text>
      </div>
    </Layout>
  </Column>
)

export default optionHoc(MultiOption)
