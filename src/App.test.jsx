import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero headline', () => {
  render(<App />);
  const headline = screen.getByText(/building secure, data-driven applications/i);
  expect(headline).toBeInTheDocument();
});

test('renders the contact section', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /let's talk/i });
  expect(heading).toBeInTheDocument();
});
