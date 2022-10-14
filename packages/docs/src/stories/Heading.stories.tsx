import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ems-ignite/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
    size: 'md',
    as: 'h1',
  },
  argTypes: {
    size: {
      description: 'Seleciona o tamanho da fonte utilizada',
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
    as: {
      description: 'Seleciona qual a tag html será utilizada',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'inline-radio',
      },
    },
    children: {
      description: 'O texto à ser exibido.',
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
