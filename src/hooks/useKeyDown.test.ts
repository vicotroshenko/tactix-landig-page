import { renderHook } from '@testing-library/react';
import user from '@testing-library/user-event';



import { useKeyDown } from './useKeyDown';


const EscapeKey = 'Escape';

test('useKeyDown hook is working', async () => {
  user.setup();
  const fn = jest.fn();
  renderHook(useKeyDown, {
    initialProps: {
      fn,
      keyName: EscapeKey,
    },
  });
  await user.keyboard(`{${EscapeKey}}`);
  expect(fn).toBeCalled();
});