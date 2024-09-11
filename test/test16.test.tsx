import { act, render, screen, waitFor } from '@testing-library/react';
import App from '../src/App';
import userEvent from '@testing-library/user-event';

test('TEST1: StyledButton', async () => {
  render(
    <App />,
  );
  const inputElement = screen.getByPlaceholderText('할 일을 입력하세요.');

  inputElement.focus();
  await userEvent.keyboard('foo');
  expect((inputElement as HTMLInputElement).value).toBe('foo');

  await userEvent.keyboard('[Enter]');
  inputElement.blur();
  expect((inputElement as HTMLInputElement).value).toBe('');

  inputElement.focus();
  await userEvent.keyboard('bar');
  expect((inputElement as HTMLInputElement).value).toBe('bar');

  await userEvent.keyboard('[Enter]');
  inputElement.blur();
  expect((inputElement as HTMLInputElement).value).toBe('');

  const todoList = screen.getByRole('todo-list');
  expect(todoList.children.length).toBe(2);

  const listItemElement = document.querySelector('#todo-1');
  if (listItemElement === null) throw new Error('Element not found');
  const deleteButton = listItemElement.children[1];

  act(() => { (deleteButton as HTMLButtonElement).click(); });
  await waitFor(() => { expect(todoList.children.length).toBe(1); });
});