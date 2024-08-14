import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from './Form.component';
import { ErrorMessage } from './validation';

enum InputValue {
  fullName = 'John Black',
  email = 'johndee@someemail.com',
  message = 'message was accepted',
  error_fullName = 'n',
  error_email = 'emailcom',
}

describe('Form', () => {
  test('fields are rendered', () => {
    render(<Form onSubmit={() => {}} />);
    expect(screen.getByLabelText(/full name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/How can we help you/)
    ).toBeInTheDocument();
  });

  test('succeed submitted form', async () => {
    const handleFormSubmit = jest.fn();
    render(<Form onSubmit={handleFormSubmit} />);

    const user = userEvent.setup();
    await user.type(screen.getByLabelText(/full name/), InputValue.fullName);
    await user.type(screen.getByLabelText(/email/), InputValue.email);
    await user.type(
      screen.getByPlaceholderText(/How can we help you/),
      InputValue.message
    );

    await user.click(screen.getByRole('button'));

    await waitFor(() =>
      expect(handleFormSubmit).toHaveBeenCalledWith({
        fullName: InputValue.fullName,
        email: InputValue.email,
        message: InputValue.message,
      })
    );
  });

  test('absence of error texts', async () => {
    const fullNameErrorEL = screen.queryByTestId(/fullName/);
    const emailErrorEl = screen.queryByTestId(/email/);
    const messageErrorEl = screen.queryByTestId(/message/);
    expect(fullNameErrorEL).not.toBeInTheDocument();
    expect(emailErrorEl).not.toBeInTheDocument();
    expect(messageErrorEl).not.toBeInTheDocument();
  });
  test('failure. submitting an empty form', async () => {
    render(<Form onSubmit={() => {}} />);

    const user = userEvent.setup();
    await user.click(screen.getByRole('button'));
    const fullNameErrorEL = await screen.findByTestId(/fullName/);
    const emailErrorEl = await screen.findByTestId(/email/);
    const messageErrorEl = await screen.findByTestId(/message/);

    await waitFor(() => {
      expect(fullNameErrorEL.textContent).toMatch(ErrorMessage.required);
    });
    await waitFor(() => {
      expect(emailErrorEl.textContent).toMatch(ErrorMessage.required);
    });
    await waitFor(() => {
      expect(messageErrorEl.textContent).toMatch(ErrorMessage.required);
    });
  });
  test('failure. input incorrect email', async () => {
    render(<Form onSubmit={() => {}} />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/email/), InputValue.error_email);
    await user.click(screen.getByRole('button'));
    const emailErrorEl = await screen.findByTestId(/email/);
    await waitFor(() => {
      expect(emailErrorEl.textContent).toMatch(ErrorMessage.email);
    });
  });
  test('failure. input short name', async () => {
    render(<Form onSubmit={() => {}} />);
    const user = userEvent.setup();

    await user.type(
      screen.getByLabelText(/full name/),
      InputValue.error_fullName
    );
    await user.click(screen.getByRole('button'));
    const emailErrorEl = await screen.findByTestId(/fullName/);
    await waitFor(() => {
      expect(emailErrorEl.textContent).toMatch(ErrorMessage.min_length);
    });
  });
});
