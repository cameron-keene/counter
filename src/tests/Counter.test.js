// import necessary react testing library helpers here
// import the Counter component here
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/App';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const val = screen.getByTestId('count');
  expect(val).toHaveTextContent(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText("+"));
  const val = screen.getByTestId('count');
  expect(val).toHaveTextContent(1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText("-"));
  const val = screen.getByTestId('count');
  expect(val).toHaveTextContent(-1);
});
