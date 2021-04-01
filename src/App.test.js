import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Comming Soon!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Comming Soon!/i);
  expect(linkElement).toBeInTheDocument();
});
