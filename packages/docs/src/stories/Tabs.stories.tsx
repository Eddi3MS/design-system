import { Story, Meta } from '@storybook/react'
import React from 'react'

import {
  Box,
  Tabs as TabsComponent,
  TabsContent,
  TabsList,
  TabsProps,
  TabsTrigger,
} from '@ems-ignite/react'

export default {
  title: 'SURFACES/Tabs',
  component: TabsComponent,
  args: {
    defaultValue: 'tab1',
  },
  argTypes: {
    defaultValue: {
      control: {
        type: null,
      },
    },
  },
} as Meta

const Template: Story<TabsProps> = (args) => {
  return (
    <Box>
      <TabsComponent {...args}>
        <TabsList>
          <TabsTrigger value={'tab1'} tabIndex={1}>
            01
          </TabsTrigger>
          <TabsTrigger value={'tab2'} tabIndex={2}>
            02
          </TabsTrigger>
        </TabsList>
        <TabsContent value={'tab1'}>content 01 </TabsContent>
        <TabsContent value={'tab2'}>content 02</TabsContent>
      </TabsComponent>
    </Box>
  )
}

export const Tabs = Template.bind({})
