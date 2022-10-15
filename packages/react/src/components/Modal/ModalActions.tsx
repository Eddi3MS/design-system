import { Button } from '../Button'
import { Footer } from './styles'

interface ModalActionsProps {
  rightClick: () => void
  leftClick: () => void
  justifyContent: string
}

export function ModalActions({
  rightClick,
  leftClick,
  justifyContent = 'flex-end',
}: ModalActionsProps) {
  return (
    <Footer css={{ $$justifyContent: `${justifyContent}` }}>
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
  )
}

ModalActions.displayName = 'ModalActions'
