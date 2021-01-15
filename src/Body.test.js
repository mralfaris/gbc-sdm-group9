mport { render, screen } from '@testing-library/react';
import Body from './Body';

test('renders learn react link', () => {
  render(<Body />);
  const linkElement = screen.getByText(/Body for Group 9/i);
  expect(linkElement).toBeInTheDocument();
});
