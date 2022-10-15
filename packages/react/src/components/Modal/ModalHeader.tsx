import { Header } from './styles'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { Button } from '../Button'

interface ModalHeaderProps {
  title: string
}

export function ModalHeader({ title }: ModalHeaderProps) {
  return (
    <Header>
      <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
      <DialogPrimitive.Close asChild>
        <Button variant={'tertiary'} size={'square'} type={'button'}>
          <X weight={'bold'} />
        </Button>
      </DialogPrimitive.Close>
    </Header>
  )
}

ModalHeader.displayName = 'ModalHeader'
