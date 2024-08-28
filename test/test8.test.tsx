import { act, fireEvent, render, waitFor } from '@testing-library/react';
import App from '../src/App';

test('TEST8: Hidden', async () => {
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
    act(() => { fireEvent.click(incrementButton); });
    act(() => { fireEvent.click(incrementButton); });
    act(() => { fireEvent.click(addRecordButton); });

    await waitFor(() => expect (recordList.children.length).toBe(1));
    await waitFor(() => expect(recordList.children[0].textContent).toBe('1번째 기록: 2'));

    act(() => { fireEvent.click(decrementButton); });
    act(() => { fireEvent.click(addRecordButton); });

    await waitFor(() => expect (recordList.children.length).toBe(2));
    await waitFor(() => expect(recordList.children[1].textContent).toBe('2번째 기록: 1'));

    act(() => { fireEvent.click(decrementButton); });
    act(() => { fireEvent.click(addRecordButton); });

    await waitFor(() => expect (recordList.children.length).toBe(3));
    await waitFor(() => expect(recordList.children[2].textContent).toBe('3번째 기록: 0'));

    act(() => { fireEvent.click(decrementButton); });
    act(() => { fireEvent.click(addRecordButton); });

    await waitFor(() => expect (recordList.children.length).toBe(4));
    await waitFor(() => expect(recordList.children[3].textContent).toBe('4번째 기록: -1'));

    act(() => { fireEvent.click(incrementButton); });
    act(() => { fireEvent.click(incrementButton); });
    act(() => { fireEvent.click(incrementButton); });
    act(() => { fireEvent.click(incrementButton); });
    act(() => { fireEvent.click(incrementButton); });
    act(() => { fireEvent.click(incrementButton); });
    act(() => { fireEvent.click(incrementButton); });
    act(() => { fireEvent.click(addRecordButton); });

    await waitFor(() => expect (recordList.children.length).toBe(5));
    await waitFor(() => expect(recordList.children[4].textContent).toBe('5번째 기록: 6'));

    act(() => { fireEvent.click(addRecordButton); });
    act(() => { fireEvent.click(addRecordButton); });
    act(() => { fireEvent.click(addRecordButton); });
    act(() => { fireEvent.click(addRecordButton); });
    act(() => { fireEvent.click(addRecordButton); });
    act(() => { fireEvent.click(addRecordButton); });

    await waitFor(() => expect (recordList.children.length).toBe(11));
    await waitFor(() => expect(recordList.children[10].textContent).toBe('11번째 기록: 6'));
  }
});