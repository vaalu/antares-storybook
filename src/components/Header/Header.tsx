import React, { ReactNode } from 'react'
export type HeaderProps = {
	level:number
	children:ReactNode
	className?:string
}
export const Header = ({ level, className , children }:HeaderProps) => {
	const Heading = `h${ level }`
	return React.createElement(Heading, { className }, children)
}