import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from ".././App.jsx"

describe('App', () => {
    test('Render the App component and ensure elements are there', () => {
      render(<App />)

      const bookhavenTitle = screen.getByText("BOOKHAVEN")
      expect(bookhavenTitle).toBeInTheDocument()

      const signup = screen.getByText("SIGNUP")
      expect(signup).toBeInTheDocument()

      const login = screen.getByText("LOGIN")
      expect(login).toBeInTheDocument()
      
      screen.debug()
    })
})