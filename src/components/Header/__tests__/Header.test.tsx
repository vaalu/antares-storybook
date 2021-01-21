import TestRenderer from 'react-test-renderer'
import React from 'react'
import { Header } from '../Header'
import mocks from '../__mocks__/Header.mock'
describe('Header', () => {
	it('Headers with levels test', () => {
		const tree = TestRenderer.create(
		<Header {...mocks[0]}>{ mocks[0].label }</Header>
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
})