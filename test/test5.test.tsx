import { render } from '@testing-library/react';
import StyledList from '../src/components/StyledList';

test('TEST5: StyledList', () => {
  const records = [0, 5, 12, 1009];
  const result = render(
    <StyledList id={'test-list'} records={records} />,
  );
  const el = result.container.querySelector('#test-list');
  expect(el?.children.length).toBe(records.length);
  records.forEach((record, index) => {
    expect(el?.children[index].textContent).toBe((index + 1) + '번째 기록: ' + record);
  });
});