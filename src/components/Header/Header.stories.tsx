import React from 'react'
import { storiesOf } from '@storybook/react'
import mocks from './__mocks__/Header.mock'
import { Header } from './Header'
storiesOf('Atom/Header', module)
	.add('H1', () => <Header {...mocks[0]}>{mocks[0].label}</Header>)
	.add('H2', () => <Header {...mocks[1]}>{mocks[1].label}</Header>)
	.add('H3', () => <Header {...mocks[2]}>{mocks[1].label}</Header>)
