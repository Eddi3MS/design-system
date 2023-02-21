import { styled, keyframes } from '../../styles'
import * as AccordionRoot from '@radix-ui/react-accordion'

const slideDown = keyframes({
	'0%': {
		height: 0,
	},
	'100%': {
		height: ' var(--radix-accordion-content-height)',
	},
})

const slideUp = keyframes({
	'0%': { height: 'var(--radix-accordion-content-height)' },
	'100%': {
		height: 0,
	},
})

export const AccordionStyled = styled(AccordionRoot.Root, {
	'.AccordionChevron': {
		transition: ' transform 300ms',
	},
	'.AccordionTrigger': {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: '$white',
		backgroundColor: 'transparent',
		borderColor: 'transparent',
		borderBottomColor: '$ignite500',
		borderStyle: 'inset',
		overflow: 'hidden',

		'& span': {
			color: 'inherit',
		},

		'&:hover, &:focus': {
			borderBottomColor: '$ignite500',
		},
	},
	'.AccordionTrigger[data-state="open"] > .AccordionChevron': {
		transform: 'rotate(180deg)',
	},

	'.AccordionContent': {
		overflow: 'hidden',
	},

	".AccordionContent[data-state='open']": {
		animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
	},
	".AccordionContent[data-state='closed']": {
		animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
	},
})
