var i=Object.defineProperty;var r=(t,o)=>i(t,"name",{value:o,configurable:!0});import{j as s,k as l,u as c,b as d}from"./index.5606e4c6.js";import{j as n,F as p}from"./jsx-runtime.ca758e2e.js";import"./index.bfcae07f.js";import"./iframe.797c1bc4.js";import"./index.352f28f0.js";const b={parameters:{storySource:{source:`import {
  Button,
  IToastProps,
  Toast,
  ToastProvider,
  useToast,
} from '@ems-ignite/react'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'POPUPS/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    content: 'Quarta-feira, 23 de Outubro \xE0s 16h',
  },
  argTypes: {
    position: {
      description: 'Seleciona a posi\xE7\xE3o do toast na tela.',
      defaultValue: 'top-right',
      options: [
        'top-right',
        'top-left',
        'bottom-right',
        'bottom-left',
        'top-center',
        'bottom-center',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    duration: {
      description: 'Seleciona a dura\xE7\xE3o do toast.',
      defaultValue: 2000,
      options: [1000, 2000, 3000, 5000000],
      control: {
        type: 'inline-radio',
      },
    },
    title: {
      description: 'T\xEDtulo do Toast.',
      control: 'text',
    },
    content: {
      description: 'Mensagem do Toast.',
      control: 'text',
    },
  },
  decorators: [
    (Story, { args }) => {
      const { position, duration } = args

      return (
        <ToastProvider position={position} duration={duration}>
          <Story />
        </ToastProvider>
      )
    },
  ],
} as Meta

const Template: Story<IToastProps> = ({ title, content, ...args }) => {
  const { toast } = useToast()

  return (
    <>
      <Button
        variant={'primary'}
        size={'sm'}
        onClick={() => toast({ title, content })}
        style={{ margin: 'auto' }}
      >
        Toast
      </Button>
    </>
  )
}

export const Default = Template.bind({})
`,locationsMap:{default:{startLoc:{col:37,line:63},endLoc:{col:1,line:78},startBody:{col:37,line:63},endBody:{col:1,line:78}}}}},title:"POPUPS/Toast",component:s,args:{title:"Agendamento realizado",content:"Quarta-feira, 23 de Outubro \xE0s 16h"},argTypes:{position:{description:"Seleciona a posi\xE7\xE3o do toast na tela.",defaultValue:"top-right",options:["top-right","top-left","bottom-right","bottom-left","top-center","bottom-center"],control:{type:"inline-radio"}},duration:{description:"Seleciona a dura\xE7\xE3o do toast.",defaultValue:2e3,options:[1e3,2e3,3e3,5e6],control:{type:"inline-radio"}},title:{description:"T\xEDtulo do Toast.",control:"text"},content:{description:"Mensagem do Toast.",control:"text"}},decorators:[(t,{args:o})=>{const{position:a,duration:e}=o;return n(l,{position:a,duration:e,children:n(t,{})})}]},u=r(({title:t,content:o,...a})=>{const{toast:e}=c();return n(p,{children:n(d,{variant:"primary",size:"sm",onClick:()=>e({title:t,content:o}),style:{margin:"auto"},children:"Toast"})})},"Template"),P=u.bind({}),h=["Default"];export{P as Default,h as __namedExportsOrder,b as default};
//# sourceMappingURL=Toast.stories.3c1fed79.js.map
