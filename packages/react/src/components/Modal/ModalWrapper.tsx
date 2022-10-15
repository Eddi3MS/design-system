import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ComponentProps } from 'react'
import { Wrapper } from './styles'

export type ModalWrapperProps = DialogPrimitive.DialogContentProps &
  ComponentProps<typeof Wrapper> & {
    width?: number
    maintainDimensions?: boolean
  }

export function ModalWrapper({
  children,
  width = 700,
  maintainDimensions = false,
  ...rest
}: ModalWrapperProps) {
  return (
    <Wrapper
      {...rest}
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
      {children}
    </Wrapper>
  )
}

ModalWrapper.displayName = 'ModalWrapper'
