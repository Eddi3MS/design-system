import { Story, Meta } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import React from 'react'

import {
  Modal as ModalComponent,
  ModalContent,
  ModalTrigger,
  ModalProps,
  ModalWrapper,
  Button,
  Text,
  ModalHeader,
  ModalActions,
} from '@ems-ignite/react'

export default {
  title: 'Overlay/Modal/Modal',
  component: ModalComponent,
  argTypes: {
    open: { control: 'boolean' },
    overlay: { control: 'boolean' },
    onOpenChange: { control: false },
    defaultOpen: { control: false },
  },
  args: {
    open: false,
    overlay: true,
  },
} as Meta

const Template: Story<ModalProps> = (args) => {
  const [, updateArgs] = useArgs()
  return (
    <ModalComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalWrapper width={400}>
        <ModalHeader title={'Titulo'} />
        <ModalContent>
          <Text>Hello World!</Text>
        </ModalContent>
        <ModalActions
          rightClick={() => {}}
          leftClick={() => {}}
          justifyContent={'space-between'}
        />
      </ModalWrapper>
    </ModalComponent>
  )
}

export const Modal = Template.bind({})
