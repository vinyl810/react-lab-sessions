import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

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

  inputElement.focus();
  await userEvent.keyboard('bar');
  expect((inputElement as HTMLInputElement).value).toBe('bar');

  await userEvent.keyboard('[Enter]');
  inputElement.blur();
  expect((inputElement as HTMLInputElement).value).toBe('');
  expect(todoList.children.length).toBe(2);
});