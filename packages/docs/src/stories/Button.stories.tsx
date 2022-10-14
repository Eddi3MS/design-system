import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ems-ignite/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      description: 'Seleciona o estilo do botão',

      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      description:
        'Seleciona a largura do botão. (full sendo 100% do container)',
      options: ['sm', 'md', 'full'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      type: 'boolean',
    },
    onClick: {
      action: 'click',
    },
    children: {
      description:
        'Children pode ser o texto do botão ou um component jsx (com icones).',
      control: {
        type: null,
      },
    },
  },
} as Meta<ButtonProps>

export const WithoutIcon: StoryObj<ButtonProps> = {}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight={'bold'} />
      </>
    ),
  },
}
