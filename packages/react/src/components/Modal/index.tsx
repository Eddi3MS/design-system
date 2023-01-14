import React, { ComponentProps, ReactNode } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Content, Footer, Header, Overlay, Wrapper } from './styles'
import { X } from 'phosphor-react'
import { Button } from '../Button'

export type ModalProps = ComponentProps<typeof DialogPrimitive.Root> & {
  overlay?: boolean
  width: number
  maintainDimensions?: boolean
  title: string
  justifyButtons?: 'flex-end' | 'center' | 'space-between' | 'flex-start'
  footer?: ReactNode
}

export function Modal({
  children,
  footer,
  overlay = true,
  width = 400,
  maintainDimensions = false,
  title,
  justifyButtons = 'space-between',
  ...rest
}: ModalProps) {
  return (
    <DialogPrimitive.Root {...rest}>
      {overlay && <Overlay />}
      <Wrapper
        css={{
          $$maxWidth: `${width}px`,
          ...(!maintainDimensions && {
            [`@media (max-width ${width}px`]: {
              width: '100vw',
              height: '100vh',
              borderRadius: 0,
            },
          }),
        }}
      >
        <Header>
          <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
          <DialogPrimitive.Close asChild>
            <Button variant={'tertiary'} size={'square'} type={'button'}>
              <X weight={'bold'} />
            </Button>
          </DialogPrimitive.Close>
        </Header>
        <Content
          css={{
            $$minHeight: `${width / 3}px`,
          }}
        >
          {children}
        </Content>

        {footer && (
          <Footer css={{ $$justifyContent: `${justifyButtons}` }}>
            {footer}
          </Footer>
        )}
      </Wrapper>
    </DialogPrimitive.Root>
  )
}

Modal.displayName = 'Modal'

export const ModalTrigger = DialogPrimitive.Trigger
ModalTrigger.displayName = 'ModalTrigger'

export const ModalContent = Content
ModalContent.displayName = 'ModalContent'
