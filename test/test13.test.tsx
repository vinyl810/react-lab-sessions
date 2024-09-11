import { act, render, screen, waitFor } from '@testing-library/react';
import App from '../src/App';
import userEvent from '@testing-library/user-event';

test('TEST1: StyledButton', async () => {
  render(
    <App />,
  );
  const tabElement = screen.getByRole('tab-list');
  if (tabElement === null) throw new Error('Element not found');
  expect(tabElement.children.length).toBe(2);

  const allTab = screen.getByText('전체');
  const favoriteTab = screen.getByText('관심목록');

  const inputElement = screen.getByPlaceholderText('할 일을 입력하세요.');

  inputElement.focus();
  await userEvent.keyboard('foo');
  expect((inputElement as HTMLInputElement).value).toBe('foo');

  await userEvent.keyboard('[Enter]');
  inputElement.blur();
  expect((inputElement as HTMLInputElement).value).toBe('');

  const todoList = screen.getByRole('todo-list');
  expect(todoList.children.length).toBe(1);

  act(() => { favoriteTab.click(); });
  await waitFor(() => { expect(todoList.children.length).toBe(0); });

  act(() => { allTab.click(); });
  await waitFor(() => { expect(todoList.children.length).toBe(1); });
});