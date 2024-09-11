import { render, screen } from '@testing-library/react';
import StyledButton from '../src/components/StyledButton';

test('TEST1: StyledButton', () => {
  render(
    <StyledButton type="blue" id="test-button">TEST</StyledButton>,
  );
  const linkElement = screen.getByText('TEST');
  expect(linkElement.id).toBe('test-button');
});