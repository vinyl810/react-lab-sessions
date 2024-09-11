import { render, screen } from '@testing-library/react';
import StyledButton from '../src/components/StyledButton';

test('TEST1: StyledButton', () => {
  render(
    <StyledButton type="red" id="test-button">TEST</StyledButton>,
  );
  const linkElement = screen.getByText('TEST');
  expect(linkElement.classList.contains('bg-red-500')).toBe(true);
});