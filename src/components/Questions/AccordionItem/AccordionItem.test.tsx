import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AccordionItem from './AccordionItem.component';

const accordionProps = {
  title: 'title',
  text: 'under title test',
};

describe('Accordion', () => {
  test('accordion item is displayed', () => {
    render(<AccordionItem item={accordionProps} />);
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
  test('accordion is closed', () => {
    render(<AccordionItem item={accordionProps} />);
    expect(screen.getByTestId('accordion_text')).toBeInTheDocument();
    expect(screen.queryByTestId('accordion_text')).not.toHaveClass(
      'accordion_text_active'
    );
  });
  test('accordion is opened', async () => {
    render(<AccordionItem item={accordionProps} />);
    const user = userEvent.setup();
    await user.click(screen.getByRole('listitem'));
    expect(screen.getByTestId('accordion_text')).toBeInTheDocument();
    expect(screen.getByTestId('accordion_text')).toHaveClass(
      'accordion_text accordion_text_active'
    );
  });
  test('accordion title is not empty', () => {
    render(<AccordionItem item={accordionProps} />);
    expect(screen.queryByRole('heading')).not.toBeEmptyDOMElement();
  });
  test('accordion text is not empty', () => {
    render(<AccordionItem item={accordionProps} />);
    expect(screen.queryByTestId('accordion_text')).not.toBeEmptyDOMElement();
  });
});
