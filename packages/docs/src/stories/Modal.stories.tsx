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
  argTypes: {
    open: { control: 'boolean' },
    overlay: { control: 'boolean' },
    onOpenChange: { control: false },
    defaultOpen: { control: false },
  },
  args: {
    open: false,
    overlay: true,
    width: 400,
    title: 'Titulo',
    justifyButtons: 'space-between',
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
        leftClick={() => updateArgs({ open: false })}
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
