var r=Object.defineProperty;var n=(o,i)=>r(o,"name",{value:i,configurable:!0});import{k as e,T as a,a as s}from"./index.66b9c28b.js";import{j as t}from"./jsx-runtime.9de81e0d.js";import"./index.493c0109.js";import"./iframe.0ad666b2.js";import"./index.6a1809af.js";const g={parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react'

import { Tooltip, Button, Text, ITooltipProps } from '@ems-ignite/react'

export default {
  title: 'POPUPS/Tooltip',
  component: Tooltip,
  args: {
    delayDuration: 200,
    bg: 'white',
    side: 'top',
    sideOffset: 5,
  },
  argTypes: {
    delayDuration: {
      description: 'Seleciona o tempo de transi\xE7\xE3o para o tooltip',
      options: [200, 1000, 5000],
      control: {
        type: 'inline-radio',
      },
    },
    bg: {
      description:
        'Seleciona a cor do background do tooltip. Note: O texto alterna entre preto e branco de acordo com o contraste',
      options: ['#000', 'red', 'white'],
      control: {
        type: 'inline-radio',
      },
    },
    side: {
      description: 'Seleciona a posi\xE7\xE3o do tooltip',
      options: ['top', 'bottom', 'left', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
    sideOffset: {
      description: 'Seleciona a distancia entre o tooltip e o trigger',
      options: [5, 10, 20],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta

const Template: Story<ITooltipProps> = (args) => {
  return (
    <Tooltip
      {...args}
      content={
        <Text size={'sm'} css={{ color: 'inherit' }}>
          21 de Outubro - Indispon\xEDvel
        </Text>
      }
    >
      <Button variant={'primary'} size={'sm'} style={{ margin: '4rem auto' }}>
        hover me
      </Button>
    </Tooltip>
  )
}

export const Default = Template.bind({})
`,locationsMap:{default:{startLoc:{col:39,line:47},endLoc:{col:1,line:62},startBody:{col:39,line:47},endBody:{col:1,line:62}}}}},title:"POPUPS/Tooltip",component:e,args:{delayDuration:200,bg:"white",side:"top",sideOffset:5},argTypes:{delayDuration:{description:"Seleciona o tempo de transi\xE7\xE3o para o tooltip",options:[200,1e3,5e3],control:{type:"inline-radio"}},bg:{description:"Seleciona a cor do background do tooltip. Note: O texto alterna entre preto e branco de acordo com o contraste",options:["#000","red","white"],control:{type:"inline-radio"}},side:{description:"Seleciona a posi\xE7\xE3o do tooltip",options:["top","bottom","left","right"],control:{type:"inline-radio"}},sideOffset:{description:"Seleciona a distancia entre o tooltip e o trigger",options:[5,10,20],control:{type:"inline-radio"}}}},p=n(o=>t(e,{...o,content:t(a,{size:"sm",css:{color:"inherit"},children:"21 de Outubro - Indispon\xEDvel"}),children:t(s,{variant:"primary",size:"sm",style:{margin:"4rem auto"},children:"hover me"})}),"Template"),f=p.bind({}),T=["Default"];export{f as Default,T as __namedExportsOrder,g as default};
//# sourceMappingURL=Tooltip.stories.10d9f3f4.js.map
