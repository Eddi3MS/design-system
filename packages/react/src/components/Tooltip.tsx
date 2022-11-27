import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { keyframes, styled } from '../styles'
import { getContrast } from 'polished'
import { ComponentProps } from '../types/ComponentProps'

function textColorContrast(color: string) {
  const colorToUse = getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF'

  return colorToUse
}

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

const StyledTooltipContent = styled(TooltipPrimitive.Content, {
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

const StyledTooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$$bg',
})

export type ITooltipProps = ComponentProps<typeof TooltipPrimitive.Root> & {
  bg: string
  content: ReactNode | ReactNode[]
}

export function Tooltip({
  children,
  content,
  bg,
  delayDuration,
  ...rest
}: ITooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={delayDuration}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <StyledTooltipContent
            css={{
              $$bg: `${bg}`,
              $$color: textColorContrast(bg),
            }}
            {...rest}
          >
            {content}
            <StyledTooltipArrow
              css={{
                $$bg: `${bg}`,
              }}
            />
          </StyledTooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
