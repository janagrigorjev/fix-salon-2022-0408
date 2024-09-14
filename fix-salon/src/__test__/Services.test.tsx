import { render, screen, fireEvent } from '@testing-library/react';
import Services from '../pages/Services';
import '@testing-library/jest-dom';

describe('Services Component', () => {
  test('renders the MassageView when clicking the Massage filter', () => {
    render(<Services />);

    // Find the "Masaža" filter button
    const massageFilterButton = screen.getByText('Masaža');
    expect(massageFilterButton).toBeInTheDocument();

    // Click the "Masaža" filter button
    fireEvent.click(massageFilterButton);

    // Check if the MassageView content is displayed
    const massageText1 = screen.getByText(/MASAZA je terapeutiska tehnika/i);
    const massageText2 = screen.getByText(/Redovne masaze mogu/i);
    const massageText3 = screen.getByText(/Postoje razlicite vrste masaza/i);

    expect(massageText1).toBeInTheDocument();
    expect(massageText2).toBeInTheDocument();
    expect(massageText3).toBeInTheDocument();
  });
});
