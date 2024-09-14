import { render, screen, fireEvent } from '@testing-library/react';
import sinon from 'sinon';
import FooterButton from '../components/test/FooterButton';

describe('FooterButton', () => {
  test('calls onButtonClick when button is clicked', () => {
    const mockHandleButtonClick = sinon.spy();
    render(<FooterButton onButtonClick={mockHandleButtonClick} />);

    const button = screen.getByText(/Click me/i);
    fireEvent.click(button);

    sinon.assert.calledOnce(mockHandleButtonClick);
  });
});
