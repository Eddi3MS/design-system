import { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import React from 'react'

import {
  Button,
  Modal as ModalComponent,
  ModalProps,
  Text,
} from '@ems-ignite/react'

export default {
  title: 'Overlay/Modal/Modal',
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
      description: 'Seleciona o alinhamento dos botões no footer',
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
        'JSX com os botões a serem exibidos. Note: Caso hajam mais de um, usar fragmento.',
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
