import type { Meta, StoryObj } from '@storybook/react'
import { Box as BoxComponent, BoxProps, Text } from '@ems-ignite/react'

export default {
  title: 'Surfaces/Box',
  component: BoxComponent,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Box: StoryObj<BoxProps> = {}

