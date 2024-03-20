import { render, screen } from '@testing-library/react'
import React from 'react'
import { App } from '../../src/App'

describe('App should', () => {
  test('display name of app', () => {
    const text = 'Ponder 2.0 Demo'
    render(<App />)
    expect(screen.getByText(text)).toHaveTextContent(text)
  })
})
