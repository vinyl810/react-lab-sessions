import { render, screen } from '@testing-library/react';
import StyledButton from '../src/components/StyledButton';

test('TEST1: StyledButton', () => {
  render(
    <StyledButton type="blue" className="blue-button">TEST</StyledButton>,
  );
  const linkElement = screen.getByText('TEST');
  expect(linkElement.classList.contains('blue-button')).toBe(true);
});