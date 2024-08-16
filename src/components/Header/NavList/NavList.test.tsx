import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NavList, { links } from './NavList.component';

describe('Nav-menu', () => {
  test('is all item rendered', () => {
    render(<NavList />);
    const allItems = screen.getAllByRole('listitem');
    expect(allItems).toHaveLength(links.length);
  });

  test('the all links have focus', async () => {
    render(<NavList />);
    const allItems = screen.getAllByRole('link');
    allItems.forEach(async (item) => {
      await userEvent.tab();
      expect(item).toHaveFocus();
    });
  });

  test('the all links have href', async () => {
    render(<NavList />);
    links.forEach((item) => {
      const linkEl = screen.getByText(item);
      expect(linkEl).toHaveAttribute('href');
    });
  });

  test('the all hrefs are coincided with links', async () => {
    render(<NavList />);
    links.forEach((item) => {
      const linkEl = screen.getByText(item);
      expect(linkEl).toHaveAttribute('href', `#${item}`);
    });
  });
});
