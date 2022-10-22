import { Story, Meta } from '@storybook/react'

import { Tooltip, Button, Text, ITooltipProps } from '@ems-ignite/react'

export default {
  title: 'POPUPS/Tooltip',
  component: Tooltip,
  args: {
    delayDuration: 200,
    bg: 'white',
    side: 'top',
    sideOffset: 5,
  },
  argTypes: {
    delayDuration: {
      description: 'Seleciona o tempo de transição para o tooltip',
      options: [200, 1000, 5000],
      control: {
        type: 'inline-radio',
      },
    },
    bg: {
      description:
        'Seleciona a cor do background do tooltip. Note: O texto alterna entre preto e branco de acordo com o contraste',
      options: ['#000', 'red', 'white'],
      control: {
        type: 'inline-radio',
      },
    },
    side: {
      description: 'Seleciona a posição do tooltip',
      options: ['top', 'bottom', 'left', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
    sideOffset: {
      description: 'Seleciona a distancia do tooltip e o trigger',
      options: [5, 10, 20],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta

const Template: Story<ITooltipProps> = (args) => {
  return (
    <Tooltip
      {...args}
      content={
        <Text size={'sm'} css={{ color: 'inherit' }}>
          21 de Outubro - Indisponível
        </Text>
      }
    >
      <Button variant={'primary'} size={'sm'} style={{ margin: '4rem auto' }}>
        hover me
      </Button>
    </Tooltip>
  )
}

export const Default = Template.bind({})
