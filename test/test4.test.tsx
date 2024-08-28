import { render } from '@testing-library/react';
import StyledList from '../src/components/StyledList';

test('TEST4: StyledList', () => {
  const result = render(
    <StyledList id={'test-list'} records={[]} />,
  );
  const el = result.container.querySelector('#test-list');
  expect(el?.children.length).toBe(1);
  expect(el?.children[0].textContent).toBe('기록이 없습니다.');
});