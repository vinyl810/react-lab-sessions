import { render, screen } from '@testing-library/react';
import StyledButton from '../src/components/StyledButton';

test('TEST1: StyledButton', () => {
  render(
    <StyledButton type="gray">TEST</StyledButton>,
  );
  const linkElement = screen.getByText('TEST');
  expect(linkElement.classList.contains('bg-gray-300')).toBe(true);
});