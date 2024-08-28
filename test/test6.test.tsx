import { act, fireEvent, render, waitFor } from '@testing-library/react';
import App from '../src/App';

test('TEST6: App', async () => {
  const result = render(
    <App />,
  );
  const incrementButton: HTMLButtonElement | null = result.container.querySelector('#increment');
  const decrementButton: HTMLButtonElement | null = result.container.querySelector('#decrement');
  // const addRecordButton: HTMLButtonElement | null = result.container.querySelector('#add-record');
  // const recordList: HTMLUListElement | null = result.container.querySelector('#record-list');
  const countDisplay: HTMLDivElement | null = result.container.querySelector('#count-display');

  expect(countDisplay?.textContent).toBe('0');

  if (!incrementButton || !countDisplay || !decrementButton) {
    expect(true).toBe(false);
  } else {
    act(() => {
      fireEvent.click(incrementButton);
    });
    act(() => {
      fireEvent.click(incrementButton);
    });
    await waitFor(() => expect(countDisplay?.textContent).toBe('2'));

    act(() => {
      fireEvent.click(decrementButton);
    });
    await waitFor(() => expect(countDisplay?.textContent).toBe('1'));
  }
});