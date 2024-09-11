import { render } from '@testing-library/react';
import StyledButton from '../src/components/StyledButton';

test('TEST1: StyledButton', () => {
  render(
    <StyledButton type="active-star" id="test-button"></StyledButton>,
  );
  const linkElement = document.querySelector('#test-button');
  if (linkElement === null) throw new Error('Element not found');
  expect(linkElement.children.length).toBe(1);
  expect(linkElement.children[0].id).toBe('star-icon');
  expect((linkElement.children[0].children[0] as SVGPathElement).style.fill).toBe('#ED8A19');
});