import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('TEST1: StyledButton', async () => {
  render(
    <App />,
  );
  const noDataElement = screen.getByText('목록이 없습니다.');
  expect(noDataElement).not.toBeNull();
});