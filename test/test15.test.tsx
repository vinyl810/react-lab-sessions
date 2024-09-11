import { act, render, screen, waitFor } from '@testing-library/react';
import App from '../src/App';
import userEvent from '@testing-library/user-event';

test('TEST1: StyledButton', async () => {
  render(
    <App />,
  );
  const inputElement = screen.getByPlaceholderText('할 일을 입력하세요.');
  const allTab = screen.getByText('전체');
  const favoriteTab = screen.getByText('관심목록');

  inputElement.focus();
  await userEvent.keyboard('foo');
  expect((inputElement as HTMLInputElement).value).toBe('foo');

  await userEvent.keyboard('[Enter]');
  inputElement.blur();
  expect((inputElement as HTMLInputElement).value).toBe('');

  const todoList = screen.getByRole('todo-list');
  expect(todoList.children.length).toBe(1);

  act(() => favoriteTab.click());
  await waitFor(() => { expect(todoList.children.length).toBe(0); });

  act(() => allTab.click());
  await waitFor(() => { expect(todoList.children.length).toBe(1); });

  const listItemElement = document.querySelector('#todo-1');
  if (listItemElement === null) throw new Error('Element not found');
  const starButton = listItemElement.children[0];

  act(() => { (starButton as HTMLButtonElement).click(); });
  await waitFor(() => { expect((starButton.children[0].children[0] as SVGPathElement).style.fill).toBe('#ED8A19'); });

  act(() => favoriteTab.click());
  await waitFor(() => { expect(todoList.children.length).toBe(1); });

  act(() => allTab.click());
  await waitFor(() => { expect(todoList.children.length).toBe(1); });

  inputElement.focus();
  await userEvent.keyboard('bar');
  expect((inputElement as HTMLInputElement).value).toBe('bar');

  await userEvent.keyboard('[Enter]');
  inputElement.blur();
  expect((inputElement as HTMLInputElement).value).toBe('');

  expect(todoList.children.length).toBe(2);

  act(() => favoriteTab.click());
  await waitFor(() => { expect(todoList.children.length).toBe(1); });
});