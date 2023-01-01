var l=Object.defineProperty;var a=(t,b)=>l(t,"name",{value:b,configurable:!0});import{c as r,B as T,d as i,e,f as o}from"./index.66b9c28b.js";import{j as n,a as s}from"./jsx-runtime.9de81e0d.js";import"./index.493c0109.js";import"./iframe.0ad666b2.js";import"./index.6a1809af.js";const f={parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react'
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
`,locationsMap:{tabs:{startLoc:{col:35,line:28},endLoc:{col:1,line:45},startBody:{col:35,line:28},endBody:{col:1,line:45}}}}},title:"SURFACES/Tabs",component:r,args:{defaultValue:"tab1"},argTypes:{defaultValue:{control:{type:null}}}},c=a(t=>n(T,{children:s(r,{...t,children:[s(i,{children:[n(e,{value:"tab1",tabIndex:1,children:"01"}),n(e,{value:"tab2",tabIndex:2,children:"02"})]}),n(o,{value:"tab1",children:"content 01 "}),n(o,{value:"tab2",children:"content 02"})]})}),"Template"),C=c.bind({}),y=["Tabs"];export{C as Tabs,y as __namedExportsOrder,f as default};
//# sourceMappingURL=Tabs.stories.03bf0cb3.js.map
