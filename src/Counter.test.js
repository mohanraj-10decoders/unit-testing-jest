import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('<Counter />', () => {
  test('increments counter', () => {
    // render the component on virtual dom
    render(<Counter />);

    //select the elements you want to interact with
    const counter = screen.getByTestId('counter');
    const incrementBtn = screen.getByTestId('increment');

    // interact with those elements
    fireEvent.click(incrementBtn);

    // //assert the expected result
    expect(counter).toHaveTextContent('1');
  });

  test('decrements counter', () => {
    render(<Counter />);

    const counter = screen.getByTestId('counter');
    const decrementBtn = screen.getByTestId('decrement');

    // fireEvent.click(decrementBtn);

    //userEvent.click => will trigger hover events before clicking. To disable this, set the skipHover option to true.
    userEvent.click(decrementBtn, undefined, { skipHover: true });
    expect(counter).toHaveTextContent('-1');
  });

  test('render email input', () => {
    render(<Counter />);

    const inputEl = screen.getByTestId('email-input');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute('type', 'email');
  });

  test('pass valid email to test email input field', () => {
    render(<Counter />);

    const inputEl = screen.getByTestId('email-input');
    userEvent.type(inputEl, 'test@mail.com');

    expect(screen.getByTestId('email-input')).toHaveValue('test@mail.com');
    expect(screen.queryByTestId('error-msg')).not.toBeInTheDocument();
  });

  test('pass invalid email to test input value', () => {
    render(<Counter />);

    const inputEl = screen.getByTestId('email-input');
    userEvent.type(inputEl, 'test');

    expect(screen.getByTestId('email-input')).toHaveValue('test');
    expect(screen.getByTestId('error-msg')).toBeInTheDocument();
    expect(screen.queryByTestId('error-msg').textContent).toEqual(
      'Please enter a valid email.'
    );
  });
});
