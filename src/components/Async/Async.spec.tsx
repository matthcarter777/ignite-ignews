import { render, screen, waitFor } from '@testing-library/react';
import { Async } from '.';

test('renders correctly', async () => {

  render(<Async />)

  expect(screen.getByText('Hellow World')).toBeInTheDocument()

  await waitFor(() => {
    return expect(screen.getByText('Button')).toBeInTheDocument()
  })
});