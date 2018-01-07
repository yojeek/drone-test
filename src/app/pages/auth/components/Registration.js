import React from 'react'
import { Condition } from 'avisits-ui/src/condition'
import { Block } from 'avisits-ui/src/content'
import Personal from './registration/Personal'
import Success from './registration/Success'

const Registration = ({ step, ...props }) => (
  <Block>
    <Condition match={step === 0}>
      <Personal {...props} />
    </Condition>
    <Condition match={step === 1}>
      <Success {...props} />
    </Condition>
  </Block>
)

export default Registration
