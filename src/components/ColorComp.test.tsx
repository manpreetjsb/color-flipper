import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import ColorComp from './ColorComp'

const setup = () => {
  const utils = render(<ColorComp />)

  return {
    ...utils,
  }
}

describe('ColorComp', () => {
  it('Should not match old color Name', () => {
    const { getByTestId } = setup()
    const GetColorName = getByTestId('Cname').textContent
    const button = getByTestId('changeBgColor')
    fireEvent.click(button)
    expect(getByTestId('Cname').textContent).not.toBe(GetColorName)
  })
})
