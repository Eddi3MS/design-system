import { Story, Meta } from '@storybook/react'
import React from 'react'

import {
  Accordion as AccordionComponent,
  AccordionProps,
  Box,
  Text,
} from '@ems-ignite/react'

export default {
  title: 'SURFACES/Accordion',
  component: AccordionComponent,
} as Meta

const Template: Story<AccordionProps> = (args) => {
  return (
    <Box style={{ width: '300px' }}>
      <AccordionComponent {...args} collapsible>
        <AccordionComponent.Item value="1" title="Accord 1">
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
            corporis necessitatibus autem quos eius nobis possimus, sunt id
            ullam accusantium.
          </Text>
        </AccordionComponent.Item>

        <AccordionComponent.Item value="2" title="Accord 2">
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
            corporis necessitatibus autem quos eius nobis possimus.
          </Text>
        </AccordionComponent.Item>
      </AccordionComponent>
    </Box>
  )
}

export const Accordion = Template.bind({})

