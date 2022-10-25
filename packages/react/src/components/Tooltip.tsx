import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentProps } from '@stitches/react'
import { ReactNode } from 'react'
import { keyframes, styled } from '../styles'
import { getContrast } from 'polished'

function textColorContrast(color: string) {
  const colorToUse = getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF'

  return colorToUse
}

const StyledTooltip = styled(TooltipPrimitive.Root, {})
const StyledTrigger = styled(TooltipPrimitive.Trigger, {})

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: '$sm',
  padding: '.5rem 1rem',
  fontSize: 15,
  lineHeight: 1,
  color: '$$color',
  backgroundColor: '$$bg',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  userSelect: 'none',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
})

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$$bg',
})

interface ITooltipRootProps extends ComponentProps<typeof StyledTooltip> {
  children: ReactNode | ReactNode[]
}

function TooltipRoot({ children, delayDuration }: ITooltipRootProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <StyledTooltip>{children}</StyledTooltip>
    </TooltipPrimitive.Provider>
  )
}

interface ITooltipTrigger extends ComponentProps<typeof StyledTrigger> {}

function TooltipTrigger({ children }: ITooltipTrigger) {
  return <StyledTrigger asChild>{children}</StyledTrigger>
}

interface ITooltipContentProps extends ComponentProps<typeof StyledContent> {
  children: ReactNode | ReactNode[]
  bg?: string
}

function TooltipContent({
  children,
  bg = '#000',
  ...props
}: ITooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <StyledContent
        {...props}
        css={{
          $$bg: `${bg}`,
          $$color: textColorContrast(bg),
        }}
      >
        {children}
        <StyledArrow
          css={{
            $$bg: `${bg}`,
          }}
        />
      </StyledContent>
    </TooltipPrimitive.Portal>
  )
}

export interface ITooltipProps extends ITooltipRootProps, ITooltipContentProps {
  bg: string
  content: ReactNode | ReactNode[]
}

export function Tooltip({
  children,
  content,
  delayDuration,
  ...rest
}: ITooltipProps) {
  return (
    <TooltipRoot delayDuration={delayDuration}>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent {...rest}>{content}</TooltipContent>
    </TooltipRoot>
  )
}
