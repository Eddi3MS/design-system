import {
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
    content: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    position: {
      description: 'Seleciona a posição do toast na tela.',
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
      description: 'Seleciona a duração do toast.',
      defaultValue: 2000,
      options: [1000, 2000, 3000, 5000000],
      control: {
        type: 'inline-radio',
      },
    },
    title: {
      description: 'Título do Toast.',
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
