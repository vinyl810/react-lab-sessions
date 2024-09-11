import { act, render, screen, waitFor } from '@testing-library/react';
import App from '../src/App';

test('TEST1: StyledButton', async () => {
  render(
    <App />,
  );
  const tabElement = screen.getByRole('tab-list');
  if (tabElement === null) throw new Error('Element not found');
  expect(tabElement.children.length).toBe(2);

  const allTab = screen.getByText('전체');
  const favoriteTab = screen.getByText('관심목록');

  act(() => { favoriteTab.click(); });

  await waitFor(() => { expect(allTab.classList.contains('bg-gray-300')).toBe(true); });
  await waitFor(() => { expect(favoriteTab.classList.contains('bg-blue-500')).toBe(true); });

  act(() => { allTab.click(); });

  await waitFor(() => { expect(allTab.classList.contains('bg-blue-500')).toBe(true); });
  await waitFor(() => { expect(favoriteTab.classList.contains('bg-gray-300')).toBe(true); });
});