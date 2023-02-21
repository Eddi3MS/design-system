import React from 'react'
import * as AccordionRoot from '@radix-ui/react-accordion'
import { CaretDown } from 'phosphor-react'
import { Text } from '../Text'
import { AccordionStyled } from './styles'

export interface AccordionProps {
	children: React.ReactNode
	type: 'single' | 'multiple'
	collapsible: boolean
}

function Accordion({ children, type = 'single', ...rest }: AccordionProps) {
	return (
		<AccordionStyled {...rest} type={type}>
			{children}
		</AccordionStyled>
	)
}

export interface AccordionItemProps extends AccordionRoot.AccordionItemProps {
	value: string
	title: string
	children: React.ReactNode
}

const AccordionItem = ({ title, children, ...rest }: AccordionItemProps) => {
	return (
		<AccordionRoot.Item {...rest}>
			<AccordionRoot.Header>
				<AccordionRoot.Trigger className="AccordionTrigger">
					<Text as="span" size="md">
						{title}
					</Text>
					<CaretDown size={24} aria-hidden className="AccordionChevron" />
				</AccordionRoot.Trigger>
			</AccordionRoot.Header>
			<AccordionRoot.Content className="AccordionContent">
				{children}
			</AccordionRoot.Content>
		</AccordionRoot.Item>
	)
}

Accordion.Item = AccordionItem

export { Accordion }
