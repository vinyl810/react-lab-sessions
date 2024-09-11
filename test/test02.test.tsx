import { render, screen } from '@testing-library/react';
import StyledButton from '../src/components/StyledButton';

test('TEST1: StyledButton', () => {
  render(
    <StyledButton type="blue">TEST</StyledButton>,
  );
  const linkElement = screen.getByText('TEST');
  expect(linkElement.classList.contains('bg-blue-500')).toBe(true);
});