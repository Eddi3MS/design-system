import React, { ComponentProps } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Content, Overlay } from './styles'

export * from './ModalActions'
export * from './ModalHeader'
export * from './ModalWrapper'

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

export const ModalTrigger = DialogPrimitive.Trigger
ModalTrigger.displayName = 'ModalTrigger'

export const ModalContent = Content
ModalContent.displayName = 'ModalContent'
