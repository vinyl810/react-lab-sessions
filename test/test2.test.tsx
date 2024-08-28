import { render, screen } from '@testing-library/react';
import StyledButton from '../src/components/StyledButton';

test('TEST2: StyledButton', () => {
  render(
    <StyledButton className="test-button">TEST</StyledButton>,
  );
  const linkElement = screen.getByText('TEST');
  expect(linkElement.classList).toContain('test-button');
});