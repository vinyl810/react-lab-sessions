import { fireEvent, render, screen } from '@testing-library/react';
import StyledButton from '../src/components/StyledButton';

test('TEST3: StyledButton', () => {
  const onClickFn = jest.fn();
  render(
    <StyledButton onClick={() => {onClickFn();}}>TEST</StyledButton>,
  );
  const linkElement = screen.getByText('TEST');
  fireEvent.click(linkElement);
  expect(onClickFn).toHaveBeenCalledTimes(1);
});