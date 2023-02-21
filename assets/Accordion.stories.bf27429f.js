var c=Object.defineProperty;var e=(t,s)=>c(t,"name",{value:s,configurable:!0});import{A as n,B as r,T as i}from"./index.5606e4c6.js";import{j as o,a as m}from"./jsx-runtime.ca758e2e.js";import"./index.bfcae07f.js";import"./iframe.797c1bc4.js";import"./index.352f28f0.js";const b={parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react'
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

`,locationsMap:{accordion:{startLoc:{col:40,line:16},endLoc:{col:1,line:37},startBody:{col:40,line:16},endBody:{col:1,line:37}}}}},title:"SURFACES/Accordion",component:n},a=e(t=>o(r,{style:{width:"300px"},children:m(n,{...t,collapsible:!0,children:[o(n.Item,{value:"1",title:"Accord 1",children:o(i,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus corporis necessitatibus autem quos eius nobis possimus, sunt id ullam accusantium."})}),o(n.Item,{value:"2",title:"Accord 2",children:o(i,{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus corporis necessitatibus autem quos eius nobis possimus."})})]})}),"Template"),C=a.bind({}),T=["Accordion"];export{C as Accordion,T as __namedExportsOrder,b as default};
//# sourceMappingURL=Accordion.stories.bf27429f.js.map
