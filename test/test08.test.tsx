import { render, screen } from '@testing-library/react';
import StyledButton from '../src/components/StyledButton';

test('TEST1: StyledButton', () => {
  const handleOnClick = jest.fn();
  render(
    <StyledButton type="blue" onClick={handleOnClick}>TEST</StyledButton>,
  );
  const linkElement = screen.getByText('TEST');
  linkElement.click();
  expect(handleOnClick).toHaveBeenCalledTimes(1);
});