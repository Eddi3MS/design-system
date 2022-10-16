import React, { ComponentProps } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Content, Footer, Header, Overlay, Wrapper } from './styles'
import { X } from 'phosphor-react'
import { Button } from '../Button'

export type ModalProps = ComponentProps<typeof DialogPrimitive.Root> & {
  overlay?: boolean
  width: number
  maintainDimensions: boolean
  title: string
  rightClick: () => void
  leftClick: () => void
  justifyButtons: string
}

export function Modal({
  children,
  overlay = true,
  width = 700,
  maintainDimensions = false,
  title,
  rightClick,
  leftClick,
  justifyButtons = 'flex-end',
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
            $$minHeight: `${width / 2}px`,
          }}
        >
          {children}
        </Content>

        <Footer css={{ $$justifyContent: `${justifyButtons}` }}>
          <Button
            onClick={leftClick}
            size={'md'}
            variant={'tertiary'}
            css={{ maxHeight: 40 }}
          >
            CANCELAR
          </Button>
          <Button
            onClick={rightClick}
            size={'md'}
            variant={'primary'}
            css={{ maxHeight: 40 }}
          >
            SALVAR
          </Button>
        </Footer>
      </Wrapper>
    </DialogPrimitive.Root>
  )
}

Modal.displayName = 'Modal'

export const ModalTrigger = DialogPrimitive.Trigger
ModalTrigger.displayName = 'ModalTrigger'

export const ModalContent = Content
ModalContent.displayName = 'ModalContent'
