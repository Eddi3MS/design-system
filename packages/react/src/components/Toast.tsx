import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { keyframes, styled } from '../styles'
import { Button } from './Button'
import { Heading } from './Heading'
import { Text } from './Text'

const VIEWPORT_PADDING = 16

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideInLeft = keyframes({
  from: { transform: `translateX(calc(-100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const slideInRight = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const slideInTop = keyframes({
  from: { transform: `translateY(calc(-100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateY(0)' },
})

const slideInBottom = keyframes({
  from: { transform: `translateY(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateY(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

const StyledViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',

  variants: {
    position: {
      'top-right': {
        top: 0,
        right: 0,
      },
      'top-left': {
        top: 0,
        left: 0,
      },
      'bottom-right': {
        bottom: 0,
        right: 0,
      },
      'bottom-left': {
        bottom: 0,
        left: 0,
      },
      'top-center': {
        top: 0,
        left: '50%',
        transform: 'translate(-50%)',
      },
      'bottom-center': {
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%)',
      },
    },
  },
})

export const StyledToast = styled(ToastPrimitive.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '$4 $5',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },

    '&[data-swipe-direction="up"]': {
      animationName: `${slideInBottom}`,
    },
    '&[data-swipe-direction="down"]': {
      animationName: `${slideInTop}`,
    },
    '&[data-swipe-direction="left"]': {
      animationName: `${slideInLeft}`,
    },
    '&[data-swipe-direction="right"]': {
      animationName: `${slideInRight}`,
    },
  },
})

const StyledTitle = styled(ToastPrimitive.Title, {
  gridArea: 'title',
  marginBottom: 5,
  fontWeight: '$bold',
  fontFamily: '$default',
  color: '$white',
  fontSize: '$xl',
  lineHeight: '$base',
})

const StyledDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$gray200',
  fontSize: '$sm',
  lineHeight: '$base',
})

const StyledClose = styled(ToastPrimitive.Close, {
  marginBottom: 5,

  svg: {
    color: '$gray200',
  },

  '&:hover': {
    svg: {
      color: '$white',
    },
  },
})

// Exports
export const ToastViewport = StyledViewport
const ToastComponent = StyledToast
type IToastComponentProps = ComponentProps<typeof ToastComponent>
const ToastTitle = StyledTitle
const ToastDescription = StyledDescription
const ToastClose = StyledClose

export interface IToastProps extends IToastComponentProps {
  title: string
  content: string
}

export const Toast = ({ title, content, ...props }: IToastProps) => {
  return (
    <ToastComponent {...props}>
      {title && (
        <ToastTitle>
          <Heading as={'h2'} size={'sm'}>
            {title}
          </Heading>
        </ToastTitle>
      )}
      <ToastDescription>
        <Text as={'p'} size={'md'}>
          {content}
        </Text>
      </ToastDescription>

      <ToastClose aria-label={'Close'} asChild>
        <Button
          aria-hidden
          variant={'tertiary'}
          size={'square'}
          type={'button'}
          css={{ minWidth: 25, height: 25 }}
        >
          <X weight={'bold'} />
        </Button>
      </ToastClose>
    </ToastComponent>
  )
}
