import * as DialogPrimitive from '@radix-ui/react-dialog'

import { styled } from '../../styles'

export const Dialog = styled(DialogPrimitive.Root, {})

export const Wrapper = styled(DialogPrimitive.Content, {
  backgroundColor: '$white',
  padding: '$4',
  borderRadius: '$md',
  overflow: 'hidden',
})

export const Content = styled('div', {})

export const Overlay = styled(DialogPrimitive.Overlay, {
  background: 'rgba(0 0 0 / 0.1)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'grid',
  placeItems: 'center',
  overflowY: 'auto',
})

export const Portal = styled(DialogPrimitive.Portal, {})
