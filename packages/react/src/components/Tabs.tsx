import { styled } from '../styles'
import * as TabsPrimitive from '@radix-ui/react-tabs'

const StyledTabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
})

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
})

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  cursor: 'pointer',
  fontFamily: 'inherit',
  boxSizing: 'border-box',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  color: '$gray100',
  userSelect: 'none',
  '&:hover': { color: '$ignite500' },
  '&:focus': {
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  '&[data-state="active"]': {
    color: '$ignite500',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
})

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: 20,
  color: '$gray100',
  outline: 'none',
})

// Exports
export const Tabs = StyledTabs
export type TabsProps = typeof Tabs
StyledTabs.displayName = 'Tabs'

export const TabsList = StyledList
export type TabsListProps = typeof TabsList
StyledList.displayName = 'TabsList'

export const TabsTrigger = StyledTrigger
export type TabsTriggerProps = typeof TabsTrigger
StyledTrigger.displayName = 'TabsTrigger'

export const TabsContent = StyledContent
export type TabsContentProps = typeof TabsContent
StyledContent.displayName = 'TabsContent'
