import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ems-ignite/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    as: 'p',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
  },
  argTypes: {
    size: {
      description: 'Seleciona o tamanho da fonte utilizada',
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    as: {
      description: 'Seleciona qual a tag html será utilizada',
      options: ['p', 'strong', 'span', 'u'],
      control: {
        type: 'inline-radio',
      },
    },
    children: {
      description: 'O texto à ser exibido.',
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
