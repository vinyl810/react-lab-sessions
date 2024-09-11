import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('TEST1: StyledButton', () => {
  render(
    <App />,
  );
  const tabElement = document.querySelector('#tab-list');
  if (tabElement === null) throw new Error('Element not found');
  expect(tabElement.children.length).toBe(2);

  const allTab = screen.getByText('전체');
  const favoriteTab = screen.getByText('관심목록');

  expect(allTab.classList.contains('bg-blue-500')).toBe(true);
  expect(favoriteTab.classList.contains('bg-gray-300')).toBe(true);
});