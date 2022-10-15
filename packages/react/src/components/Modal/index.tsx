import React, { ComponentProps } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Content, Overlay, Wrapper } from './styles'

export type ModalProps = ComponentProps<typeof DialogPrimitive.Root> & {
  overlay?: boolean
}

export function Modal({ children, overlay = true, ...rest }: ModalProps) {
  return (
    <DialogPrimitive.Root {...rest}>
      {overlay && <Overlay />}
      {children}
    </DialogPrimitive.Root>
  )
}

Modal.displayName = 'Modal'

export type ModalWrapperProps = DialogPrimitive.DialogContentProps &
  ComponentProps<typeof Wrapper> & {
    width?: number
    maintainDimensions?: boolean
  }

export function ModalWrapper({ children, ...rest }: ModalWrapperProps) {
  return <Wrapper {...rest}>{children}</Wrapper>
}

ModalWrapper.displayName = 'ModalWrapper'

export const ModalTrigger = DialogPrimitive.Trigger
ModalTrigger.displayName = 'ModalTrigger'

export const ModalContent = Content
ModalContent.displayName = 'ModalContent'
