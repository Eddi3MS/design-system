import { Story, Meta } from '@storybook/react'

import {
  Tooltip,
  TooltipContent,
  ITooltipProps,
  TooltipTrigger,
  Button,
  Text,
} from '@ems-ignite/react'

export default {
  title: 'POPUPS/Tooltip',
  component: Tooltip,
  args: {
    delayDuration: 200,
  },
  argTypes: {
    delayDuration: {
      description: 'Seleciona o tempo de transição para o tooltip',
      options: [200, 1000, 5000],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta

const Template: Story<ITooltipProps> = (args) => {
  return (
    <Tooltip {...args}>
      <TooltipTrigger>
        <Button variant={'primary'} size={'sm'} style={{ margin: '4rem auto' }}>
          hover me
        </Button>
      </TooltipTrigger>

      <TooltipContent sideOffset={5} side={'top'} bg={'white'}>
        <Text size={'sm'} css={{ color: 'inherit' }}>
          21 de Outubro - Indisponível
        </Text>
      </TooltipContent>
    </Tooltip>
  )
}

export const Default = Template.bind({})
