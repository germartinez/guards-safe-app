import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn App', () => {
  render(<App />)
  const linkElement = screen.getByText(/Safe Transaction Guards/i)
  expect(linkElement).toBeInTheDocument()
})
