import { render, screen } from '@testing-library/react';
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

  const todoList = screen.getByRole('todo-list');
  expect(todoList.children.length).toBe(1);

  const listitemElement = document.querySelector('#todo-1');
  if (listitemElement === null) throw new Error('Element not found');

  const deleteButton = listitemElement.children[1];
  expect(deleteButton).not.toBeNull();
  expect(deleteButton.classList.contains('bg-red-500')).toBe(true);
});