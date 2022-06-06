import { render, screen } from '@testing-library/react';
import { mocked } from 'jest-mock'
import { useSession } from 'next-auth/client';

import { SignInButton } from '.';


jest.mock('next-auth/client')

describe('SignInButton component', () => {

  it('renders correctly when user is not autenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false]);

    render(
      <SignInButton />
    )
  
    expect(screen.getByText("Sign in with Github")).toBeInTheDocument()
  })

  it('renders correctly when user is autenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([
      { user: { name: 'Jhon Doe', email: 'jhon.doe@gmail.com'}},
      false
    ])

    render(
      <SignInButton />
    )
  
    expect(screen.getByText("Jhon Doe")).toBeInTheDocument()
  })
  
})
