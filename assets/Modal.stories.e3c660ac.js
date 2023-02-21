var d=Object.defineProperty;var a=(o,n)=>d(o,"name",{value:n,configurable:!0});import{M as s,b as t,T as p}from"./index.5606e4c6.js";import{a as r,F as i,j as e}from"./jsx-runtime.ca758e2e.js";import{ap as c}from"./iframe.797c1bc4.js";import"./index.bfcae07f.js";import"./index.352f28f0.js";const b={parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import React from 'react'

import {
  Button,
  Modal as ModalComponent,
  ModalProps,
  Text,
} from '@ems-ignite/react'

export default {
  title: 'POPUPS/Modal',
  component: ModalComponent,
  args: {
    open: false,
    overlay: true,
    width: 400,
    title: 'Titulo',
    justifyButtons: 'space-between',
  },
  argTypes: {
    open: {
      description: 'Show/Hide o modal',
      control: 'boolean',
    },
    overlay: {
      description: 'Show/Hide o overlay',
      defaultValue: true,
      control: 'boolean',
    },
    justifyButtons: {
      description: 'Seleciona o alinhamento dos bot\xF5es no footer',
      defaultValue: 'space-between',
      options: ['flex-end', 'center', 'space-between', 'flex-start'],
      control: {
        type: 'inline-radio',
      },
    },
    width: {
      description: 'Defina a largura do modal em pixels',
      defaultValue: 400,
      options: [400, 500, 600],
      control: {
        type: 'inline-radio',
      },
    },
    footer: {
      description:
        'JSX com os bot\xF5es a serem exibidos. Note: Caso hajam mais de um, usar fragmento.',
      control: null,
    },
  },
} as Meta

const Template: Story<ModalProps> = (args) => {
  const [, updateArgs] = useArgs()
  return (
    <>
      <Button variant={'secondary'} onClick={() => updateArgs({ open: true })}>
        Open Modal
      </Button>
      <ModalComponent
        {...args}
        onOpenChange={(open) => updateArgs({ open })}
        footer={
          <>
            <Button
              onClick={() => updateArgs({ open: false })}
              size={'md'}
              variant={'tertiary'}
              css={{ maxHeight: 40 }}
            >
              CANCELAR
            </Button>
            <Button size={'md'} variant={'primary'} css={{ maxHeight: 40 }}>
              SALVAR
            </Button>
          </>
        }
      >
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam facere
          unde asperiores!
        </Text>
      </ModalComponent>
    </>
  )
}

export const Modal = Template.bind({})
`,locationsMap:{modal:{startLoc:{col:36,line:56},endLoc:{col:1,line:89},startBody:{col:36,line:56},endBody:{col:1,line:89}}}}},title:"POPUPS/Modal",component:s,args:{open:!1,overlay:!0,width:400,title:"Titulo",justifyButtons:"space-between"},argTypes:{open:{description:"Show/Hide o modal",control:"boolean"},overlay:{description:"Show/Hide o overlay",defaultValue:!0,control:"boolean"},justifyButtons:{description:"Seleciona o alinhamento dos bot\xF5es no footer",defaultValue:"space-between",options:["flex-end","center","space-between","flex-start"],control:{type:"inline-radio"}},width:{description:"Defina a largura do modal em pixels",defaultValue:400,options:[400,500,600],control:{type:"inline-radio"}},footer:{description:"JSX com os bot\xF5es a serem exibidos. Note: Caso hajam mais de um, usar fragmento.",control:null}}},m=a(o=>{const[,n]=c();return r(i,{children:[e(t,{variant:"secondary",onClick:()=>n({open:!0}),children:"Open Modal"}),e(s,{...o,onOpenChange:l=>n({open:l}),footer:r(i,{children:[e(t,{onClick:()=>n({open:!1}),size:"md",variant:"tertiary",css:{maxHeight:40},children:"CANCELAR"}),e(t,{size:"md",variant:"primary",css:{maxHeight:40},children:"SALVAR"})]}),children:e(p,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam facere unde asperiores!"})})]})},"Template"),M=m.bind({}),A=["Modal"];export{M as Modal,A as __namedExportsOrder,b as default};
//# sourceMappingURL=Modal.stories.e3c660ac.js.map
