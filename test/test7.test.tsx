import { act, fireEvent, render, waitFor } from '@testing-library/react';
import App from '../src/App';

test('TEST7: App', async () => {
  const result = render(
    <App />,
  );
  const incrementButton: HTMLButtonElement | null = result.container.querySelector('#increment');
  const decrementButton: HTMLButtonElement | null = result.container.querySelector('#decrement');
  const addRecordButton: HTMLButtonElement | null = result.container.querySelector('#add-record');
  const recordList: HTMLUListElement | null = result.container.querySelector('#record-list');
  const countDisplay: HTMLDivElement | null = result.container.querySelector('#count-display');

  expect(countDisplay?.textContent).toBe('0');

  if (!incrementButton || !countDisplay || !decrementButton || !addRecordButton || !recordList) {
    expect(true).toBe(false);
  } else {
    act(() => {
      fireEvent.click(incrementButton);
    });
    act(() => {
      fireEvent.click(incrementButton);
    });
    act(() => {
      fireEvent.click(addRecordButton);
    });

    await waitFor(() => expect (recordList.children.length).toBe(1));
    await waitFor(() => expect(recordList.children[0].textContent).toBe('1번째 기록: 2'));

    act(() => {
      fireEvent.click(decrementButton);
    });
    act(() => {
      fireEvent.click(addRecordButton);
    });

    await waitFor(() => expect (recordList.children.length).toBe(2));
    await waitFor(() => expect(recordList.children[1].textContent).toBe('2번째 기록: 1'));

  }
});