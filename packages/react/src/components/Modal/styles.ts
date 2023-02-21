import * as DialogPrimitive from '@radix-ui/react-dialog'

import { styled, keyframes } from '../../styles'

const overlayShow = keyframes({
	'0%': { opacity: 0 },
	'100%': { opacity: 1 },
})

const overlayHide = keyframes({
	'0%': { opacity: 1 },
	'100%': { opacity: 0 },
})

const contentShow = keyframes({
	'0%': {
		opacity: 0,
		transform: 'translate3d(-50%, calc(-50% + 20px), 0) scale(.96)',
	},
	'100%': { opacity: 1, transform: 'translate3d(-50%, -50%, 0) scale(1)' },
})

const contentHide = keyframes({
	'0%': { opacity: 1, transform: 'translate3d(-50%, -50%, 0) scale(1)' },
	'100%': {
		opacity: 0,
		transform: 'translate3d(-50%, calc(-50% + 20px), 0) scale(.96)',
	},
})

export const Dialog = styled(DialogPrimitive.Root, {})

export const Wrapper = styled(DialogPrimitive.Content, {
	position: 'fixed',
	top: '50%',
	left: '50%',
	backfaceVisibility: 'hidden',
	transform: 'translate3d(-50%, -50%,0)',
	width: '90vw',
	maxWidth: '$$maxWidth',
	background: '$gray800',
	maxHeight: '90vh',
	overflow: 'auto',
	zIndex: 778,
	borderRadius: '$sm',

	'&:focus': {
		outline: 'none',
	},

	'&[data-state=open]': {
		animation: `${contentShow} .3s ease-out`,
	},

	'&[data-state=closed]': {
		animation: `${contentHide} .2s ease-out`,
	},

	boxShadow: `
  0px 1.8px 2.6px rgba(0,0,0,.038),
  0px 5px 7.1px rgba(0,0,0,.057),
  0px 12.1px 17.2px rgba(0,0,0,.077),
  0px 40px 57px rgba(0,0,0,.12),

  `,
})

export const Content = styled('div', {
	padding: '$8',
	minHeight: '$$minHeight',
	boxSizing: 'border-box',
})

export const Header = styled('header', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	color: '$gray100',
	paddingInline: '$8',
	backgroundColor: '$gray700',
})

export const Footer = styled('footer', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: '$$justifyContent',
	color: '$gray100',
	paddingInline: '$8',
	backgroundColor: '$gray700',
	paddingBlock: '$4',
})

export const Overlay = styled(DialogPrimitive.Overlay, {
	background: 'rgba(0 0 0 / 0.9)',
	position: 'fixed',
	inset: 0,
	zIndex: 777,

	'&[data-state=open]': {
		animation: `${overlayShow} .2s ease-in`,
	},

	'&[data-state=closed]': {
		animation: `${overlayHide} .3s ease-in`,
	},
})
